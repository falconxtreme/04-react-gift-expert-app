import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const initialCategories = ["Dragon Ball"];

  const [categories, setCategories] = useState(initialCategories);

  return (
    <>
      <h2>GiftExpertApp</h2>

      <AddCategory setCategories={setCategories} />

      <hr></hr>

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {
  const initialCategories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(initialCategories);

  // const handleAdd = () => {
  //   // let newCategories = [...categories];
  //   // newCategories.push("HunterXHunter");
  //   // setCategories(newCategories);

  //   // setCategories([...categories, "HunterXHunter"]);

  //   setCategories((cats) => [...cats, "HunterXHunter"]);
  // };

  return (
    <>
      <h2>GiftExpertApp</h2>

      <AddCategory setCategories={setCategories} />

      <hr></hr>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

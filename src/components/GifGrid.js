import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import React, { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
// import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { loading } = useFetchGifs();

  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);

  return (
    <>
      <h3> {category} </h3>
      {loading ? "Cargando..." : "Fin de carga"}
      {/* <div className="card-grid">
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} />;
        })}
      </div> */}
    </>
  );
};

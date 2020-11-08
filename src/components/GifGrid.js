import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const api_key = "xQnjXFKPiWqQKNK6qWeTp8LhMTVkXCnX";
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${api_key}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    // console.log(gifs);
    setImages(gifs);
  };

  return (
    <div>
      <h3> {category} </h3>

      {images.map((image) => {
        return <GifGridItem key={image.id} img={image} />;
      })}
    </div>
  );
};

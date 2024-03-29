import React from "react";
import { useFetchGifs } from "../../hooks";
import { GridItem } from "../GifItem";

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

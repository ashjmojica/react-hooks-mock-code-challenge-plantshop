import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true);
  const {name, image, price} = plant;

function handleToggleStock() {
  setIsInStock((isInStock) => !isInStock);
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{"plant name"}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary" onClick={handleToggleStock}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}





export default PlantCard;

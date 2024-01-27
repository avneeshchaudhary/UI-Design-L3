import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import "./Card.css";

const Card = ({ product }) => {
  const { addToCart } = useContext(GlobalContext);

  return (
    <div className="product-card">
      <p className="prodtext prodName">{product.name}</p>
      <p className="prodtext prodCategory">{product.category}</p>
      <p className="prodtext prodPrice">{'$' + product.price.toFixed(2)}</p>
      <button className="btn" onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Card;

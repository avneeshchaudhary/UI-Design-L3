// Cart.js
import React, { useContext } from "react";
import CartItem from "./CartItem";
import { GlobalContext } from "./GlobalState";
import "./Cart.css";

const Cart = () => {
  const { cart, checkout } = useContext(GlobalContext);

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  const renderCartContent = () => {
    if (cart.length > 0) {
      const sortedCart = [...cart].sort((a, b) => a.price - b.price);

      return (
        <div className="cart-wrapper">
          {sortedCart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
          <p className="totalPrice">{"Total Price: $" + calculateTotalPrice()}</p>
          <button onClick={checkout} className="checkoutButton">
            Checkout
          </button>
        </div>
      );
    } else {
      return <h2 className="no-items">No items in your shopping cart!</h2>;
    }
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cartContainer">{renderCartContent()}</div>
    </div>
  );
};

export default Cart;

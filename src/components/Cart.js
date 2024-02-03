// Cart.js
import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalState";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, calculateTotalPrice } = useContext(GlobalContext);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handlePurchase = () => {
    // Implement purchase logic here (e.g., send order to server, update database)
    // For simplicity, this example just logs the customer info and cart items
    console.log("Customer Info:", customerInfo);
    console.log("Cart Items:", cart);
    clearCart();
    setShowPurchaseForm(false);
  };

  return (
    <div className="cart">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-summary">
          <p className="total-price">Total: ${calculateTotalPrice()}</p>
          {!showPurchaseForm ? (
            <button onClick={() => setShowPurchaseForm(true)}>Proceed to Purchase</button>
          ) : (
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={customerInfo.name} onChange={handleInputChange} required />

              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" value={customerInfo.address} onChange={handleInputChange} required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={customerInfo.email} onChange={handleInputChange} required />

              <button type="button" onClick={handlePurchase}>Complete Purchase</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;

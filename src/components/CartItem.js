// CartItem.js
import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

const CartItem = ({ product }) => {
  const { updateQuantity } = useContext(GlobalContext);

  const handleIncrement = () => {
    // Assuming the maximum quantity is set to 10 (you can adjust this)
    if (product.quantity < 10) {
      updateQuantity(product.id, product.quantity + 1);
    }
  };

  const handleDecrement = () => {
    // Assuming the minimum quantity is set to 1 (you can adjust this)
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <p className="cart-item-text itemName">{product.name}</p>
        <p className="cart-item-text">{'$' + product.price.toFixed(2)}</p>
        <p className="cart-item-text">{'Category: ' + product.category}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={handleDecrement}>-</button>
        <span>{product.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default CartItem;

// CartItem.js
import React from 'react';

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <p className="cart-item-text itemName">{product.name}</p>
        <p className="cart-item-text">{'$' + product.price.toFixed(2)}</p>
        <p className="cart-item-text">{'Category: ' + product.category}</p>
      </div>
    </div>
  );
};

export default CartItem;

// GlobalState.js
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  cart: [],
  preferences: {
    lactose: false,
    nuts: false,
    organic: false,
  },
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Calculate total price
  const calculateTotalPrice = () => {
    return state.cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  // Actions
  const addToCart = (product) => {
    alert(`${product.name} added to cart`);
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeItem = (product) => {
    alert(`${product.name} removed from cart`);
    dispatch({ type: "REMOVE_ITEM", payload: product });
  };

  const clearCart = () => {
    alert("Cart cleared");
    dispatch({ type: "CLEAR_CART" });
  };

  const updatePreferences = (newPreferences) => {
    dispatch({ type: "UPDATE_PREFERENCES", payload: newPreferences });
  };

  // Add more actions as needed

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        preferences: state.preferences,
        addToCart,
        removeItem,
        clearCart,
        updatePreferences,
        calculateTotalPrice,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

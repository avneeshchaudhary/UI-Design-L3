// GlobalProvider.js
import React, { createContext, useReducer, useContext } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = { cart: [] };

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const addToCart = (product) => {
    const existingProductIndex = state.cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update the quantity
      const updatedCart = [...state.cart];
      updatedCart[existingProductIndex].quantity += 1;

      dispatch({ type: "UPDATE_CART", payload: updatedCart });
    } else {
      // Product doesn't exist in the cart, add it with quantity 1
      dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } });
    }
  };

  const removeItem = (product) => {
    const existingProductIndex = state.cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...state.cart];

      if (updatedCart[existingProductIndex].quantity > 1) {
        // Decrease the quantity if more than 1
        updatedCart[existingProductIndex].quantity -= 1;
      } else {
        // Remove the product if the quantity is 1
        updatedCart.splice(existingProductIndex, 1);
      }

      dispatch({ type: "UPDATE_CART", payload: updatedCart });
    }
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeItem,
        clearCart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

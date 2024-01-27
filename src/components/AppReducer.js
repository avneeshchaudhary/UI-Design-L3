// AppReducer.js
const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CHECKOUT':
      // Add logic for handling the checkout process
      alert('Checkout completed!');
      return {
        ...state,
        cart: [],
      };
    // Add more cases for other actions if needed

    default:
      return state;
  }
};

export default AppReducer;

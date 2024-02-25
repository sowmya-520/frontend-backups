import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id && item.tenure === action.payload.tenure
      );

      if (existingItem) {
        // If the item is already in the cart, update quantity and amount
        existingItem.quantity += action.payload.quantity;
        existingItem.amount += action.payload.amount;
      } else {
        // If the item is not in the cart, add it
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => !(item.id === action.payload.id && item.tenure === action.payload.tenure)
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
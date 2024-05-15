import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const isProductExist = state.products.some((item) => item.id === id);
      if (!isProductExist) {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter((item) => item.id !== id);
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;

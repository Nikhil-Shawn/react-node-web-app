import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (product) => product._id === action.payload._id &&
                     product.color === action.payload.color &&
                     product.size === action.payload.size
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push({ ...action.payload, quantity: action.payload.quantity });
      }
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.products.findIndex(item => item._id === action.payload._id && item.color === action.payload.color && item.size === action.payload.size);
      if (itemIndex >= 0) {
        state.quantity -= state.products[itemIndex].quantity;
        state.total -= state.products[itemIndex].price * state.products[itemIndex].quantity;
        state.products.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

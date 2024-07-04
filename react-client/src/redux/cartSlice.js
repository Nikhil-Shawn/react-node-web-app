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
      const item = state.products.find((product)=>product._id === action.payload.id && product.color === action.payload.color && product.size === action.payload.size)
      if(item){
        item.quantity += action.payload.quantity
    }else {
      state.products.push(action.payload);
    }
    state.quantity += action.payload.quantity;
    state.total += action.payload.price * action.payload.quantity
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

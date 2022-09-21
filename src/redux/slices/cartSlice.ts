import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductData } from 'ts/interfaces';

const initialState: ProductData[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<ProductData>) {
      return [...state, action.payload];
    },

    removeCartItem(state, action: PayloadAction<ProductData>) {
      return state.filter((cart) => cart.id !== action.payload.id);
    },

    clearCart() {
      return [];
    }
  }
});

export const {
  addCartItem,
  removeCartItem,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

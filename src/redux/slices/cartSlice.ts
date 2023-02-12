import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { ProductData } from 'ts/interfaces';

interface CartState {
  cart: ProductData[];
  cartTotalCount: number;
}

const initialState: CartState = {
  cart: [],
  cartTotalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<ProductData>) {
      state.cart = [...state.cart, action.payload];
      state.cartTotalCount = state.cart.reduce(
        (acc, cartItem) => acc + Number(cartItem.price),
        0
      );
    },

    removeCartItem(state, action: PayloadAction<ProductData>) {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id);
      state.cartTotalCount = state.cart.reduce(
        (acc, cartItem) => acc + Number(cartItem.price),
        0
      );
    },

    clearCart(state) {
      state.cart = [];
      state.cartTotalCount = 0;
    },
  },
});

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

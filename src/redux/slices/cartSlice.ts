import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductData } from 'ts/interfaces';

interface CartState {
  cart: ProductData[],
  cartTotalCount: number,
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
      state.cart.push(action.payload);
    },

    removeCartItem(state, action: PayloadAction<ProductData>) {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id);
    },

    clearCart(state) {
      state.cart = [];
    },

    getCartTotalCount(state, action: PayloadAction<ProductData[]>) {
      state.cartTotalCount = action.payload.reduce((acc, cur) => acc + Number(cur.price), 0);
    }
  }
});

export const {
  addCartItem,
  removeCartItem,
  clearCart,
  getCartTotalCount
} = cartSlice.actions;

export default cartSlice.reducer;

import type { RootState } from 'redux/store';

const getCart = (state: RootState) => state.cart.cart;

const getCartTotalCount = (state: RootState) => state.cart.cartTotalCount;

export { getCart, getCartTotalCount };

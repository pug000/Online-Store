import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };

export default store;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dataLayout from '../../layout/data';
import { ProductData } from '../../ts/interfaces';

const initialState: ProductData[] = dataLayout;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(_, action: PayloadAction<ProductData[]>) {
      return action.payload;
    }
  }
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

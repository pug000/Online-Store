import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import dataLayout from 'layout/data';

import type { ProductData } from 'ts/interfaces';

const initialState: ProductData[] = dataLayout;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(_, action: PayloadAction<ProductData[]>) {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import products from 'utils/products';

import type { ProductData } from 'ts/interfaces';

const initialState: ProductData[] = products;

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

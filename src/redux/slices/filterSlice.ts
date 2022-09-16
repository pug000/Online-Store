import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  maxPrice,
  maxQuantity,
  minPrice,
  minQuantity
} from '../../settings';

import OptionValue from '../../ts/enum';
import { FilterActionProps, FilterState } from '../../ts/interfaces';

const initialState: FilterState = {
  search: '',
  sort: OptionValue.AZ,
  price: [minPrice, maxPrice],
  quantity: [minQuantity, maxQuantity],
  brand: [],
  type: [],
  colorEffect: [],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilter(state, { payload }: PayloadAction<FilterActionProps>) {
      return {
        ...state,
        [payload.key]: payload.value,
      };
    },

    selectFilter(state, { payload }: PayloadAction<FilterActionProps>) {
      return {
        ...state,
        [payload.key]: [...state[payload.key], payload.value],
      };
    },

    removeSelectedFilter(state, { payload }: PayloadAction<FilterActionProps>) {
      return {
        ...state,
        [payload.key]: [...state[payload.key]].filter((item) => item !== payload.value),
      };
    },

    resetFilter(state) {
      return {
        ...initialState,
        sort: state.sort
      };
    },

    clearFilter() {
      return initialState;
    }
  }
});

export const {
  updateFilter,
  selectFilter,
  removeSelectedFilter,
  resetFilter,
  clearFilter
} = filterSlice.actions;

export default filterSlice.reducer;

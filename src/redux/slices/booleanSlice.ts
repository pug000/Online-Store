import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { ActionProps } from 'ts/interfaces';

interface BooleanState {
  isPopupOpen: boolean;
  isCartMenuOpen: boolean;
}

const initialState: BooleanState = {
  isPopupOpen: false,
  isCartMenuOpen: false,
};

const booleanSlice = createSlice({
  name: 'booleanState',
  initialState,
  reducers: {
    setBooleanState(
      state,
      { payload }: PayloadAction<ActionProps<BooleanState, boolean>>
    ) {
      state[payload.key] = payload.value;
    },
  },
});

export const { setBooleanState } = booleanSlice.actions;

export default booleanSlice.reducer;

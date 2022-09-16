import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

const popupSlice = createSlice({
  name: 'isPopupOpen',
  initialState,
  reducers: {
    setPopupOpen(_, action: PayloadAction<boolean>) {
      return action.payload;
    }
  }
});

export const { setPopupOpen } = popupSlice.actions;

export default popupSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selected: null,
};
const printingSlice = createSlice({
  name: "printing",
  initialState,
  reducers: {
    actionPrinting: (state, action) => {
      state.items = action.payload;
      return state;
    },
    actionSelectedPrinting: (state, action) => {
      state.selected = action.payload;
      return state;
    },
  },
});

export const { actionPrinting, actionSelectedPrinting } = printingSlice.actions;

export default printingSlice.reducer;

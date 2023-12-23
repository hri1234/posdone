import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selected: null,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    actionCategory: (state, action) => {
      state.items = action.payload;
      return state;
    },
    actionSelectedCategory: (state, action) => {
      state.selected = action.payload;
      return state;
    },
  },
});

export const { actionCategory, actionSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;

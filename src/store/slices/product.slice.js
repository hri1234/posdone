import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selected: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    actionProducts: (state, action) => {
      state.items = action.payload;
      return state;
    },
    actionSelectedProduct: (state, action) => {
      state.selected = action.payload;
      return state;
    },
  },
});

export const { actionProducts, actionSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;

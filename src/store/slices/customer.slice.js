import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selected: null,
};
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    actionCustomer: (state, action) => {
      state.items = action.payload;
      return state;
    },
    actionSelectedCustomer: (state, action) => {
      state.selected = action.payload;
      return state;
    },
  },
});

export const { actionCustomer, actionSelectedCustomer } = customerSlice.actions;

export default customerSlice.reducer;

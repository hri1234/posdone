import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selected: null,
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    actionMenu: (state, action) => {
      state.items = action.payload;
      return state;
    },
    actionSelectedMenu: (state, action) => {
      state.selected = action.payload;
      return state;
    },
  },
});

export const { actionMenu, actionSelectedMenu } = menuSlice.actions;

export default menuSlice.reducer;

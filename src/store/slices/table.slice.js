import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTable = createAsyncThunk(
  "table/addTable",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(
        `https://mohammad-backend.onrender.com/api/order`
      );
      if (response.status === 200) {
        dispatch(getTableSuccess(response.data));
      } else {
        dispatch(getTableFailure(response.data.message));
      }
    } catch (error) {
      dispatch(getTableFailure(error.response.data.message));
    }
  }
);

const tableSlice = createSlice({
  name: "table",
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    tableorder(state, action) {
      console.log("addItem", state, action);
      const tempItems = Array.isArray(state?.items) ? state?.items : [];

      tempItems.push({ ...action.payload });

      state.items = tempItems || [];
      return state;
    },
    getTableSuccess(state, action) {
      state.items = action.payload;
      state.error = null;
    },
    getTableFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const { tableorder, getTableFailure, getTableSuccess } =
  tableSlice.actions;

export default tableSlice.reducer;

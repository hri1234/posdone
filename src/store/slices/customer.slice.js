import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "src/constants/url.constant";

const initialState = {
  items: [],
  selected: null,
  message: null,
  loading: false,
  error: null,
};
export const addCustomers = createAsyncThunk(
  "customer/addCustomers",
  async ({ payload, callback }, { dispatch }) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("banquet-token")}`,
      };
      const response = await axios.post(`${API_URL.CREATE_CUSTOMER}`, payload, {
        headers,
      });
      if (response.data.success === true) {
        dispatch(addCustomerSuccess(response.data.customer));
        callback(response.data.message);
      } else {
        dispatch(addCustomerFailure(response.data.message));
        callback(response.data.message);
      }
    } catch (error) {
      dispatch(addCustomerFailure(error.response.data.message));
    }
  }
);
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    actionCustomer: (state, action) => {
      state.items = action.payload;
      return state;
    },
    addCustomerRequest: (state) => {
      state.loading = true;
      state.customerData = null;
      state.error = null;
    },
    addCustomerSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = null;
    },
    addCustomerFailure: (state, action) => {
      state.loading = false;
      state.customerData = null;
      state.error = action.payload;
    },
    actionSelectedCustomer: (state, action) => {
      state.selected = action.payload;
      return state;
    },
  },
});

export const {
  actionCustomer,
  actionSelectedCustomer,
  addCustomerFailure,
  addCustomerRequest,
  addCustomerSuccess,
} = customerSlice.actions;

export default customerSlice.reducer;

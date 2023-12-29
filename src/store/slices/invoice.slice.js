import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "src/constants/url.constant";

const initialState = {
  invoices: null,
  message: null,

  loading: false,
  error: null,
};
export const addInvoice = createAsyncThunk(
  "Invoice/addInvoice",
  async ({ payload, callback }, { dispatch }) => {
    try {
      //   const headers = {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${localStorage.getItem("banquet-token")}`,
      //   };
      const response = await axios.post(
        `https://mohammad-backend.onrender.com/api/invoice`,
        payload
      );
      if (response.data.status === 201) {
        console.log(response.data);
        dispatch(addInvoiceSuccess(response.data.message));
        callback(response.data.message);
      } else {
        dispatch(addInvoiceFailure(response.data.message));
        callback(response.data.message);
      }
    } catch (error) {
      dispatch(addInvoiceFailure(error.response.data.message));
    }
  }
);
export const updateInvoice = createAsyncThunk(
  "Invoice/editInvoice",
  async ({ payload, id, callback }, { dispatch }) => {
    try {
      //   const headers = {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${localStorage.getItem("banquet-token")}`,
      //   };
      const response = await axios.put(
        `https://mohammad-backend.onrender.com/api/invoice/${id}`,
        payload
      );
      console.log(response);
      if (response.data.status === 201) {
        console.log(response.data);
        dispatch(addInvoiceSuccess(response.data));
        callback(response.data);
      } else {
        dispatch(addInvoiceFailure(response.data.message));
        callback(response.data.message);
      }
    } catch (error) {
      dispatch(addInvoiceFailure(error.response.data.message));
    }
  }
);
export const getInvoice = createAsyncThunk(
  "Invoice/getInvoice",
  async (_, { dispatch }) => {
    try {
      //   const headers = {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${localStorage.getItem("banquet-token")}`,
      //   };
      const response = await axios.get(
        `https://mohammad-backend.onrender.com/api/invoice`
      );

      if (response.status === 200) {
        console.log(response.data);
        dispatch(getInvoiceSuccess(response.data));
      } else {
        dispatch(addInvoiceFailure(response.data.message));
      }
    } catch (error) {
      dispatch(addInvoiceFailure(error.response.data.message));
    }
  }
);
export const deleteInvoice = createAsyncThunk(
  "Invoice/deleteInvoice",
  async ({ id, callback }, { dispatch }) => {
    try {
      const response = await axios.delete(
        `https://mohammad-backend.onrender.com/api/invoice/${id}`
      );

      if (response.status === 200) {
        console.log(response.data);
        dispatch(addInvoiceSuccess(response.data));
        callback();
      } else {
        dispatch(addInvoiceFailure(response.data.message));
      }
    } catch (error) {
      dispatch(addInvoiceFailure(error.response.data.message));
    }
  }
);
const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addInvoiceRequest: (state) => {
      state.loading = true;
      state.invoices = null;
      state.error = null;
    },
    addInvoiceSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = null;
    },
    getInvoiceSuccess: (state, action) => {
      state.loading = false;
      state.invoices = action.payload;
      state.error = null;
    },
    addInvoiceFailure: (state, action) => {
      state.loading = false;
      state.invoices = null;
      state.error = action.payload;
    },
  },
});

export const {
  addInvoiceFailure,
  addInvoiceRequest,
  addInvoiceSuccess,
  getInvoiceSuccess,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
// constants
import { ID_KEY } from "src/constants/content.constant";
// utils
import { getTotalPrice } from "src/utils";

const initialState = {
  totalPrice: 0,
  items: [], // items !== null ? items : [],
  saveItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      console.log("addItem", state, action);
      const tempItems = Array.isArray(state?.items) ? state?.items : [];
      const itemInCart = tempItems.find(
        (item) => item[ID_KEY] === action.payload[ID_KEY]
      );
      // const itemInCart = tempItems.find(
      //   (item) =>
      //     item[ID_KEY] === action.payload[ID_KEY] &&
      //     item?.addOnLength === action.payload?.addOnLength &&
      //     item?.size?.label === action.payload?.size?.label
      // );
      // console.log("addItem-itemInCart", itemInCart);

      if (itemInCart) {
        itemInCart.quantity++;
        itemInCart.totalPrice = itemInCart.price;
      } else {
        tempItems.push({ ...action.payload });
      }

      state.totalPrice = getTotalPrice(tempItems);
      state.items = tempItems || [];
      return state;
    },
    incrementQuantity: (state, action) => {
      let tempItems = Array.isArray(state?.items) ? state?.items : [];

      const item =
        tempItems.find((item) => item[ID_KEY] === action.payload) || {};
      const tempItemIndex = tempItems.findIndex(
        (item) => item[ID_KEY] === action.payload
      );

      item.quantity++;
      item.totalPrice = Number(item.price) * Number(item.quantity);
      tempItems[tempItemIndex].totalPrice =
        Number(item.price) * Number(item.quantity);
      state.totalPrice = getTotalPrice(tempItems);
      state.items = tempItems || [];
      return state;
    },
    decrementQuantity: (state, action) => {
      let tempItems = Array.isArray(state?.items) ? state?.items : [];

      const item =
        tempItems.find((item) => item[ID_KEY] === action.payload) || {};
      const tempItemIndex = tempItems.findIndex(
        (item) => item[ID_KEY] === action.payload
      );
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      tempItems[tempItemIndex].totalPrice =
        Number(item.price) * Number(item.quantity);
      state.totalPrice = getTotalPrice(tempItems);
      state.items = tempItems || [];
      return state;
    },

    removeItem(state, action) {
      let tempItems = Array.isArray(state?.items) ? state?.items : [];
      // console.log(
      //   "removeItem-payload",
      //   action.payload[ID_KEY],
      //   action.payload?.addOnLength,
      //   action.payload?.size?.label
      // );
      // const tempItemIndex = tempItems.findIndex(
      //   (item) => item[ID_KEY] === action.payload
      //   // Number(item?.addOnLength) === Number(action.payload?.addOnLength) &&
      //   // item?.size?.label === action.payload?.size?.label
      // );
      // console.log("removeItem-tempItemIndex", tempItemIndex);
      // const tempItemsFiltered = tempItems?.splice(0, tempItemIndex);
      const tempItemsFiltered = tempItems?.filter(
        (f) => f[ID_KEY] !== action.payload
      );

      // state.totalPrice = tempItemsFiltered.reduce(
      //   (sum, current) => sum + current.price * current.quantity,
      //   0
      // );
      state.totalPrice = getTotalPrice(tempItemsFiltered);

      state.items = tempItemsFiltered;
      return state;
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      return state;
    },
    saveCart(state, action) {
      state.saveItems = [...action.payload];
      state.items = [];
      state.totalPrice = 0;
      return state;
    },
  },
});

export const {
  addItem,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeOneItem,
  clearCart,
  saveCart,
} = cartSlice.actions;

export default cartSlice.reducer;
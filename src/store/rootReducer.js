import { combineReducers } from "redux";
import cart from "./slices/cart.slice";
import menu from "./slices/menu.slice";
import table from "./slices/table.slice";
import printing from "./slices/printing.slice";
import products from "./slices/product.slice";
import customer from "./slices/customer.slice";
import addsupplier from "./slices/addsupplier.slice";
import category from "./slices/category.slice";

const rootReducer = combineReducers({
  cart,
  menu,
  table,
  products,
  customer,
  addsupplier,
  printing,
  category,
});

export default rootReducer;

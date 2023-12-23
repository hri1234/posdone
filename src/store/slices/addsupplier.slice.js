import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selected: null,
};
const supplierSlice = createSlice({
  name: "addsupplier",
  initialState,
  reducers: {
    addSupplier (state, action){
      console.log("addItem", state, action);
      const tempItems = Array.isArray(state?.items) ? state?.items : [];

    
      
      
          tempItems.push({ ...action.payload });
          

      state.items = tempItems || [];
    return state;

     }
  },
});

export const {addSupplier } =supplierSlice.actions;

export default supplierSlice .reducer;

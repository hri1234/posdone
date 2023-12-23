import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice ({
    name :"table",
    initialState: {
        items: []
        
    },
    reducers :{
       tableorder (state, action){
        console.log("addItem", state, action);
        const tempItems = Array.isArray(state?.items) ? state?.items : [];

      
        
        
            tempItems.push({ ...action.payload });
            

        state.items = tempItems || [];
      return state;

       }
    }
});

export const{
   tableorder,
} = tableSlice.actions;

export default tableSlice.reducer;
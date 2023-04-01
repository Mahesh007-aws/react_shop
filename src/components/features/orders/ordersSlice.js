import {createSlice} from "@reduxjs/toolkit";

const initialState = {nooforders: []};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    order: (state, action) => {
      state.nooforders = action.payload;
    },
  },
});

export default ordersSlice.reducer;
export const orderAction = ordersSlice.actions;

import {createSlice} from "@reduxjs/toolkit";

const initialState = {NoOfElcProducts: []};

const ElectronicsProductSlice = createSlice({
  name: "ElectronicsCart",
  initialState,
  reducers: {
    AddToElcCart: (state, action) => {
      state.NoOfElcProducts.push(action.payload);
    },
    RemoveFromCart: (state, action) => {
      state.NoOfElcProducts.splice(action.payload, 1);
    },
  },
});

export default ElectronicsProductSlice.reducer;
export const ElcCartAction = ElectronicsProductSlice.actions;

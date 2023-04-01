import {createSlice} from "@reduxjs/toolkit";

const initialState = {Electronics: 15, Fruits: 6, Grocerys: 9};

const MostvisitedSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    IncElc: (state) => {
      state.Electronics++;
    },
    IncFruits: (state) => {
      state.Fruits++;
    },
    IncGrocerys: (state) => {
      state.Grocerys++;
    },
  },
});

export default MostvisitedSlice.reducer;
export const MostVisitedActions = MostvisitedSlice.actions;

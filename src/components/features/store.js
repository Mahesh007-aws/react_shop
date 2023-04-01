import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../features/productslice";
import ElcCartReducer from "./ElectronicsCart/ElecSlice";
import ordersSlice from "./orders/ordersSlice";
import MostvisitedReducer from "./mostvisited/mostvisitedSlice";
import Authreducer from "./Authentication/Authslice";

const store = configureStore({
  reducer: {
    PL: productReducer,
    ElcCart: ElcCartReducer,
    orders: ordersSlice,
    visit: MostvisitedReducer,
    Auth: Authreducer,
  },
});

export default store;

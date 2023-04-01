// test-utils.jsx
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {render as rtlRender} from "@testing-library/react";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
// Import reducer
import Productreducer from "./components/features/productslice";
import ElcCartReducer from "./components/features/ElectronicsCart/ElecSlice";
import ordersSlice from "./components/features/orders/ordersSlice";
import mostvisitedSlice from "./components/features/mostvisited/mostvisitedSlice";
import Authslice from "./components/features/Authentication/Authslice";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        PL: Productreducer,
        ElcCart: ElcCartReducer,
        orders: ordersSlice,
        visit: mostvisitedSlice,
        Auth: Authslice,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

function renderWithRouter(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        PL: Productreducer,
        ElcCart: ElcCartReducer,
        orders: ordersSlice,
        visit: mostvisitedSlice,
        Auth: Authslice,
      },
      preloadedState,
    }),
    route = "/",
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }
  window.history.pushState({}, "Test page", route);
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

// re-export everything
export * from "@testing-library/react";
// override render method
export {render, renderWithRouter};

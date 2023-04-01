import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import ProductApi from "../../data/productApi";

const initialState = {loading: false, products: [], error: "", del: false};
const addstate = {updating: false, updateddb: [], error: ""};

export const fetchproducts = createAsyncThunk(
  "Fetch/ProductsList",
  (itemnav) => {
    return axios
      .get(`http://localhost:9999/${itemnav}`)
      .then((res) => res.data);
  }
);

export const updateProducts = createAsyncThunk(
  "Post/ToProdutDB",
  async ({newdata, path}) => {
    return axios
      .post(`http://localhost:9999/${path}`, newdata)
      .then((res) => res.data);
  }
);

export const editProducts = createAsyncThunk(
  "PUT/ToProdutDB",
  async ({newdata, path}) => {
    return axios
      .put(`http://localhost:9999/${path}`, newdata)
      .then((res) => res.data);
  }
);

export const deleteProducts = createAsyncThunk(
  "DELETE/ToProdutDB",
  async (pid) => {
    return axios
      .delete(`http://localhost:9999/Electronics/${pid}`)
      .then((res) => res.data);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchproducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchproducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
    });
    builder.addCase(updateProducts.rejected, (state, action) => {
      state.updating = false;
      state.updateddb = [];
      state.error = action.payload;
    });
    builder.addCase(updateProducts.fulfilled, (state, action) => {
      state.updating = false;
      state.updateddb = action.payload;
      state.error = "";
      console.log("updated data", action.payload);
    });
    builder.addCase(editProducts.fulfilled, (state, action) => {
      state.updating = false;
      state.updateddb = action.payload;
      state.error = "";
      console.log("edited data", action.payload);
    });
    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      state.updating = false;
      state.del = !state.del;
      state.error = "";
      console.log("deleted data", action.payload);
    });
  },
});

export default productSlice.reducer;

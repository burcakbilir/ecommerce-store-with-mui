import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {STATUS} from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getproducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = res.json();
  return data;
});

export const getProductsCategory = createAsyncThunk(
  "getproductscategory",
  async (category) => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = res.json();
    return data;
  }
);

export const getProductDetail = createAsyncThunk(
  "getproductdetail",
  async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = res.json();
    return data;
  }
);




const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state,action) => {
        state.products = action.payload;
        state.productsStatus = STATUS.SUCCESS;
      })
      .addCase(getProducts.rejected, (state) => {
        state.productsStatus = STATUS.FAIL;
      })
      .addCase(getProductsCategory.pending, (state) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProductsCategory.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.productsStatus = action.payload;
      })
      .addCase(getProductsCategory.rejected, (state) => {
        state.productsStatus = STATUS.FAIL;
      })
      .addCase(getProductDetail.pending, (state) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getProductDetail.rejected, (state) => {
        state.productDetailStatus = STATUS.FAIL;
      })
     
  },
});

export default productsSlice.reducer;

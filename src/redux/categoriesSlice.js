import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk("getcategories", async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = res.json();
  return data;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;

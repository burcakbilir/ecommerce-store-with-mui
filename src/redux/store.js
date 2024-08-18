import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import categoriesSlice from "./categoriesSlice";
import filtersSlice from "./filtersSlice";
import cartSlice from "./cartSlice";
import wishSlice from "./wishSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
    filters: filtersSlice,
    carts: cartSlice,
    wish: wishSlice,
  },
});

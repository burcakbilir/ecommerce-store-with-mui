import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  selectedCategories: [],
  selectedPrice: [0, 200],
  sorting: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(
          (item) => item !== category
        );
      } else {
        state.selectedCategories.push(category);
      }
    },
    togglePriceRange: (state, action) => {
      state.selectedPrice = action.payload;
    },
    toggleSort: (state, action) => {
      state.sorting = action.payload;
    },
    clearFilters: (state) => {
      state.selectedCategories = [];
      state.selectedPrice = [0, 500];
    },
  },
});

export const { toggleCategory, clearFilters, togglePriceRange, toggleSort } =
  filtersSlice.actions;
export default filtersSlice.reducer;

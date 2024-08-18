import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let wish = localStorage.getItem("wish");
  if (wish) {
    return JSON.parse(localStorage.getItem("wish"));
  } else {
    return [];
  }
};

const setInLocalStorage = (data) => {
  localStorage.setItem("wish", JSON.stringify(data));
};

const initialState = {
  wishlist: fetchFromLocalStorage(),
  itemCount: 0,
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const isItemInWishlist = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (!isItemInWishlist) {
        state.wishlist.push(action.payload);
        setInLocalStorage(state.wishlist);
      }
    },
    removeFromWishlist: (state, action) => {
      const tempWishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      state.wishlist = tempWishlist;
      setInLocalStorage(state.wishlist);
    },
    clearWishlist: (state) => {
      state.wishlist = [];
      setInLocalStorage(state.wishlist);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishSlice.actions;
export default wishSlice.reducer;

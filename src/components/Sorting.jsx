import { FormControl, InputLabel, Menu, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSort } from "../redux/filtersSlice";

const Sorting = () => {
  const dispatch = useDispatch();
  const { sorting } = useSelector((state) => state.filters);

  const handleSortChange = (e) => {
    dispatch(toggleSort(e.target.value));
  };

  return (
    <FormControl variant="outlined" sx={{ minWidth: 100 }}>
      <InputLabel id="sorting">Sort by</InputLabel>
      <Select
        labelId="sorting"
        value={sorting}
        onChange={handleSortChange}
        label="Sory by"
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="priceAsc">Low to High</MenuItem>
        <MenuItem value="priceDesc">High to Low</MenuItem>
       
      </Select>
    </FormControl>
  );
};

export default Sorting;

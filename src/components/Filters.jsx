import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categoriesSlice";
import { toggleCategory, togglePriceRange } from "../redux/filtersSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { selectedCategories, selectedPrice } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    dispatch(toggleCategory(category));
  };

  const handlePriceChange = (e, newValue) => {
    dispatch(togglePriceRange(newValue));
  };

  const priceRange = [
    { label: "Under $50", value: "0-50" },
    { label: "$50 to $100", value: "50-100" },
    { label: "$100 to $200", value: "100-200" },
    { label: "Over $200", value: "200+" },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{color:"#0b3954", marginBottom:3}}>Filters</Typography>
      <Stack direction={{ xs: "row", md: "column" }} spacing={3}>
        <Box>
          <FormControl>
            <FormLabel>Categories</FormLabel>
            <FormGroup>
              {categories?.map((category, i) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                  }
                  label={category}
                  key={i}
                  sx={{ textTransform: "capitalize" }}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Box>
              <Slider
                color="success"
                value={selectedPrice}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={200}
                step={4}
              />
              <Typography>{`Price Range : $${selectedPrice[0]}- $${selectedPrice[1]} `}</Typography>
            </Box>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};

export default Filters;

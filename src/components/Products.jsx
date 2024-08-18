import { Typography, Container, Grid, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productsSlice";
import ReactPaginate from "react-paginate";
import Sorting from "./Sorting";

const Products = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  const { selectedCategories, selectedPrice, sorting } = useSelector(
    (state) => state.filters
  );
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = products
    .filter((product) => {
      const selectCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const selectPrice =
        product.price >= selectedPrice[0] && product.price <= selectedPrice[1];

      return selectCategory && selectPrice;
    })
    .sort((a, b) => {
      switch (sorting) {
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
      }
    });

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;

    setItemOffset(newOffset);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 3,
          color: "#0b3954",
        }}
      >
        <Typography variant="h4">Products</Typography>
        <Sorting />
      </Box>
      {selectedPrice && selectedPrice[0] > 168 ? (
        <Box sx={{ padding: 3 }}>
          <Typography>Products not found</Typography>
        </Box>
      ) : (
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {currentItems.map((product, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}

      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </Container>
  );
};

export default Products;

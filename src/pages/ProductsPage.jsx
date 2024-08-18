import React from "react";
import Products from "../components/Products";
import Filters from "../components/Filters";
import { Container, Divider, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductsPage = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        sx={{ alignItems: "flex-start" }}
      >
        <Filters />
        <Divider orientation="vertical" flexItem />
        <Products />
      </Stack>
      <Footer />
    </Container>
  );
};

export default ProductsPage;

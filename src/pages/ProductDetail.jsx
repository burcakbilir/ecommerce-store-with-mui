import React from "react";
import ProductDetailCard from "../components/ProductDetailCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
import Ads from "../components/Ads"

const ProductDetail = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <ProductDetailCard />
      <Ads/>
      <Footer />
    </Container>
  );
};

export default ProductDetail;

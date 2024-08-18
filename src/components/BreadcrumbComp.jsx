import { Container, Breadcrumbs, Typography, } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const BreadcrumbComp = ({productDetail}) => {
  return (

       <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{marginTop:"10px"}}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Typography>{productDetail.title}</Typography>
      </Breadcrumbs>
    
  );
};

export default BreadcrumbComp;

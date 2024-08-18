import {
  Box,
  Button,

  Stack,
  Typography,
  IconButton,
  Container
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../redux/productsSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Loading from "./Loading";
import styled from "@emotion/styled";
import BreadcrumbComp from "./BreadcrumbComp";

const ProductImg = styled("img")`
  height: 350px;
  width: 400px;
  object-fit: contain;

  padding: 30px;

  @media (max-width: 500px) {
    height: 300px;
    width: 350px;
  }
`;

const ProductDetailCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch]);

  return (
    <Container sx={{ height: "100vh" }}>
      <BreadcrumbComp productDetail={productDetail} />
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{
            alignItems: "center",
            marginTop: { xs: 2, md: 10, padding: "10px" },
          }}
        >
          <Box sx={{ border: "1px solid #dee0ea", borderRadius: "10px" }}>
            <ProductImg src={productDetail.image}></ProductImg>
          </Box>

          <Stack>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Box>
                <Typography variant="h4" sx={{ color: "#0b3954" }}>
                  {productDetail.title}
                </Typography>
                {/* <Typography sx={{display:"flex", alignItems:"center"}}>
<StarIcon color="warning"/> {productDetail.rating.rate}
</Typography> */}
                <Typography variant="p" sx={{ color: "#0b3954" }}>
                  {productDetail.description}
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{ fontSize: "40px", color: "#0b3954" }}
              >
                ${productDetail.price}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
                gap: "10px",
              }}
            >
              <Button
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                sx={{
                  backgroundColor: "black",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                Add to cart
              </Button>
              <Button
                variant="contained"
                color="error"
                endIcon={<FavoriteBorderIcon />}
              >
                Add to wishlist
              </Button>
            </Box>
          </Stack>
        </Stack>
      )}
    </Container>
  );
};

export default ProductDetailCard;

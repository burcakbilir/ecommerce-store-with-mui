import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { removeFromWishlist } from "../redux/wishSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads"

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((item) => item.wish);

  console.log(wishlist);

  const handleFavoriteButton = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar/>
      <Typography sx={{fontSize:"20px" ,padding:"20px"}}>Wishlist</Typography>
      <Grid container spacing={4} sx={{ height: "100%" , padding:"20px"}}>
      
        {wishlist?.map((wish, id) => (
          <Grid item xs={12} md={4} key={id}>
            <Card sx={{ position: "relative" }}>
              <CardActionArea>
                <CardMedia
                  component="div"
                  sx={{
                    height: 150,
                    backgroundImage: `url(${wish.image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                />
                <CardContent
                  sx={{
                    height: 150,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ color: "#0b3954" }}>
                    {wish.title}
                  </Typography>
                  <Typography sx={{ color: "#0b3954" }}>
                    ${wish.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <IconButton
                onClick={() => handleFavoriteButton(wish.id)}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  color: "rgba(255, 43, 43, 0.896)",
                  backgroundColor: "rgba(255, 255, 255, 0.888)",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "rgba(255, 43, 43, 0.896)",
                  },
                }}
              >
                <FavoriteIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Ads/>
      <Footer/>
    </Container>
  );
};

export default Wishlist;

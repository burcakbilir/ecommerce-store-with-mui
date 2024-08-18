import {
  Container,
  Typography,
  Stack,
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Bestsellers = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [favorites, setFavorites] = useState({});

  const getBestsellers = async () => {
    const res = await fetch("https://fakestoreapi.com/products?limit=6");
    const data = await res.json();
    setBestSellers(data);
  };

  useEffect(() => {
    getBestsellers();
  }, []);

  const handleFavoriteButton = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addCart = () => {
    // Add to cart functionality
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Stack>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "#0b3954", textAlign: "center" }}
        >
          Bestsellers
        </Typography>
        <Box>
          <Slider {...settings}>
            {bestSellers?.map((bestseller) => (
              <Box key={bestseller.id} sx={{ padding: 2 }}>
                <Card sx={{ position: "relative" }}>
                  <CardActionArea>
                    <CardMedia
                      component="div"
                      sx={{
                        height: 150,
                        backgroundImage: `url(${bestseller.image})`,
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
                        {bestseller.title}
                      </Typography>
                      <Typography sx={{ color: "#0b3954" }}>
                        ${bestseller.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <IconButton
                    onClick={() => handleFavoriteButton(bestseller.id)}
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
                    {favorites[bestseller.id] ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                  <CardActions>
                    <Button
                      onClick={addCart}
                      size="medium"
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "#191919",
                        textTransform: "capitalize",
                        "&:hover": {
                          backgroundColor: "#191919c3",
                        },
                      }}
                    >
                      <AddShoppingCartIcon sx={{ mr: 1 }} />
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Stack>
    </Container>
  );
};

export default Bestsellers;

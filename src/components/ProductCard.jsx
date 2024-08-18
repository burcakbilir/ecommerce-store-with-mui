import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToWishlist, removeFromWishlist } from "../redux/wishSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate();
  const { wishlist } = useSelector((item) => item.wish);

  useEffect(() => {
    const isItemWishlist = wishlist.some((item) => (item.id == product.id));
    setIsFavorited(isItemWishlist);
  }, [wishlist, product.id]);

  const addCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success("Product successfully added to your cart");
  };

  const handleFavoriteButton = (e) => {
    e.stopPropagation();
    if (isFavorited) {
      dispatch(removeFromWishlist(product.id));
      toast.info("Product removed from your wishlist");
    } else {
      dispatch(addToWishlist({ ...product }));
      toast.success("Product added to your wishlist");
    }
    setIsFavorited(!isFavorited);
  };
  return (
    <Card sx={{ position: "relative" }}>
      <CardActionArea onClick={() => navigate(`/products/${product.id}`)}>
        <CardMedia
          component="div"
          sx={{
            height: 150,
            backgroundImage: `url(${product.image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      </CardActionArea>
      <CardContent
        sx={{
          height: 150,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ color: "#0b3954" }}>{product.title}</Typography>
        <Typography sx={{ color: "#0b3954" }}>${product.price}</Typography>
      </CardContent>
      <IconButton
        onClick={handleFavoriteButton}
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
        {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
          {" "}
          <AddShoppingCartIcon sx={{ mr: 1 }} />
          Add to cart
        </Button>
      </CardActions>

      
    </Card>
  );
};

export default ProductCard;

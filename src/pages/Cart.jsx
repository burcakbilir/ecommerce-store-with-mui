import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Stack,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import { removeFromCart } from "../redux/cartSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styled from "@emotion/styled";
import emptyCart from "../assets/emptycart.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads"

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const EmptyCartImg = styled("img")`
    height: 350px;
    width: 300px;
    object-fit: contain;
    @media (min-width: 600px) {
      max-height: 550px;
      width: 350px;
    }
  `;

  return (
    <Container sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
   
    }}>
      <Navbar/>
      <Typography variant="h4"  gutterBottom sx={{color:"#0b3954", padding:3}}>
        Cart
      </Typography>

      {carts?.length > 0 ? (
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="space-between"
          sx={{padding:"30px"}}
        
        >
          <TableContainer component={Paper} >
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>Product Image</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {carts.map((cart, id) => (
                  <TableRow key={id}>
                    <TableCell>
                      <img
                        src={cart.image}
                        alt={cart.title}
                        style={{ width: 40 }}
                      />
                    </TableCell>
                    <TableCell>{cart.title}</TableCell>
                    <TableCell>${cart.price}</TableCell>
                    <TableCell>{cart.quantity}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => dispatch(removeFromCart(cart.id))}
                      >
                        <DeleteOutlineIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ marginTop: 2 }}>
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
                >
                  <Typography variant="h6">Coupon Code</Typography>
                  <Typography variant="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, beatae.
                  </Typography>
                  <TextField label="Code" variant="outlined" />
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "black",
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                  >
                    Apply
                  </Button>
                </Box>
                <Box
                  sx={{
                    marginTop: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    marginBottom: "12px"
                  }}
                >
                  <Typography variant="h6">
                    Total Amount: ${totalAmount.toFixed(2)}
                  </Typography>
                  <Button variant="contained" fullWidth color="success">
                    Checkout
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EmptyCartImg src={emptyCart}></EmptyCartImg>
          <Typography>Your cart is empty</Typography>
        </Box>
      )}
      <Ads/>
      <Footer/>
    </Container>
  );
};

export default Cart;

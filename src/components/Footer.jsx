import styled from "@emotion/styled";
import {
  Box,
  Container,
  Divider,
  Link,
  Paper,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import CardImage from "../assets/cards.png";

const FooterCardImg = styled("img")`
  height: 20px;
  width: 100%;
`;

const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{marginTop:"30px"}}>
      <Grid container spacing={1} >
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ color: "#0b3954", fontWeight: 600 }}>
            TrendStore
           
          </Typography>
          <Typography sx={{ color: "#0b3954" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            id quasi consequatur iste reprehenderit ab expedita nisi eius libero
            facilis.
          </Typography>
          <Typography sx={{ color: "#0b3954" }}>
            (+800) 1234 5678 90 – info@example.com
          </Typography>
        </Grid>

        <Grid item xs={4} md={2} px={10}>
          <Typography sx={{ fontWeight: 600, color: "#0b3954" }}>
            Information
          </Typography>
          <Link>About Us</Link>
        </Grid>
        <Grid item xs={4} md={2} px={10}>
          <Typography sx={{ fontWeight: 600, color: "#0b3954" }}>
            Account
          </Typography>
          <Link>Login</Link>
        </Grid>

        <Grid item xs={4} md={2} px={10}>
          <Typography sx={{ fontWeight: 600, color: "#0b3954" }}>
            Shop
          </Typography>
          <Link>Bestsellers</Link>
        </Grid>
      </Grid>
      <Divider />
      {/* BOTTOM FOOTER */}
      <Grid container spacing={2} sx={{padding:"20px 0"}}>
        <Grid item xs={12} md={4}>
          <Typography sx={{ color: "#0b3954", fontSize: "12px" }}>
            Copyright 2024 © E-Commerce Theme. All right reserved. Powered by
            Burçak Bilir.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <FooterCardImg src={CardImage}></FooterCardImg>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography sx={{ color: "#212121", fontSize: "12px" }}>
            Privacy Policy | Terms and Conditions | Returns Policy
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

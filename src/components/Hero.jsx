import React from "react";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/500.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/hero-img.webp";
import styled from "@emotion/styled";

const HeroImage = styled("img")`
  height: 350px;
  width: 300px;
  object-fit: contain;
  @media (min-width: 600px) {
    max-height: 550px;
    width: 350px;
  }
`;

const HeroContent = styled(Box)`
  display: flex;
  align-items: center;
  padding: 100px 30px;
  margin: 20px 0;

  flex-direction: column;
  background-color: #f2f2f2;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroContent>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ alignItems: "center" }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              color: "#0b3954",
              fontSize: {
                xs: "44px",
                md: "60px",
              },
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            The point of Aesthetics and Comfort in
            <Typography
              color="#2e7d32"
              component="span"
              sx={{ fontSize: "inherit", fontWeight: 700 }}
            >
              {" "}
              Sneakers
            </Typography>
          </Typography>
          <Typography
            sx={{ marginBottom: "10px", color: "#0b3954", fontWeight: 500 }}
          >
            Style meets comfort. Explore our curated collection for a perfect
            blend of aesthetics and coziness.
          </Typography>
          <Button
            onClick={() => navigate("/products")}
            color="success"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Explore Now
          </Button>
        </Box>
        <Box>
          <HeroImage src={HeroImg}></HeroImage>
        </Box>
      </Stack>
    </HeroContent>
  );
};

export default Hero;

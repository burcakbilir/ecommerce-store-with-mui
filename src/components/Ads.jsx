import {
  Box,
  Container,
  Stack,
  Typography,
  Button
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import AdsImg from "../assets/adsimg.png"
import { useNavigate } from "react-router-dom";

const AdsImage = styled("img")`
  height: 350px;
  width: 300px;
  object-fit: contain;
  @media (min-width: 600px) {
    max-height: 550px;
    width: 350px;
  }
`;

const AdsContent = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0 30px;
  margin: 50px 0;

  flex-direction: column;
  background-color: #f6f6f6;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Ads = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <AdsContent>
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
                  xs: "34px",
                  md: "40px",
                },
                fontWeight: 600,
                lineHeight: 1,
                marginBottom:"10px"
              }}
            >
              Style and comfort come together. Plus, enjoy up to 50% off right now!
             
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
            <AdsImage src={AdsImg}></AdsImage>
          </Box>
        </Stack>
      </AdsContent>
    </Container>
  );
};

export default Ads;

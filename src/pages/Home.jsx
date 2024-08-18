import { Container } from "@mui/material";
import React from "react";
import Hero from "../components/Hero";
import Bestsellers from "../components/Bestsellers";
import Ads from "../components/Ads"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (

    <Container sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      <Navbar/>
   <Hero/>
   <Bestsellers/>
   <Ads/>
   <Footer/>
   </Container>
  )
};

export default Home;

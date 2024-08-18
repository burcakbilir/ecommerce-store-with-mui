import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
  Container,
  Badge,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {getCartTotal} from "../redux/cartSlice"
import { useSelector } from "react-redux";

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "products",
  },
];

const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled(Button)`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 16px;
`;

const Icons = styled(Box)`
  display: "flex";
  align-items: "center";
`;

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const {itemCount} = useSelector(item => item.carts)
  const navigate = useNavigate();

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar 
      position="static"
      sx={{ backgroundColor: "#fff", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <StyledToolBar disableGutters>
          {/* MOBILE MENU */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#0b3954"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={page.path}
                      style={{ textDecoration: "none", color: "#0b3954" }}
                    >
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO */}
          <Typography color="#0b3954" variant="h5" sx={{ fontWeight: 700 }}>
            TrendStore
          </Typography>

          {/* MENU  */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuButton key={page.name}>
                <Link
                  to={page.path}
                  style={{ textDecoration: "none", color: "#0b3954" }}
                >
                  {page.name}
                </Link>
              </MenuButton>
            ))}
          </Box>

          {/* ICONS */}
          <Icons>
            <IconButton onClick={() => navigate("/wishlist")}>
              <FavoriteBorderIcon sx={{ color: "#0b3954" }} />
            </IconButton>
            <IconButton onClick={() => navigate("/cart")}>
              <Badge badgeContent={itemCount} color="success">
                <WorkOutlineIcon sx={{ color: "#0b3954" }} />
              </Badge>
            </IconButton>
            <IconButton>
              <PersonOutlineIcon sx={{ fontSize: 28, color: "#0b3954" }} />
            </IconButton>
          </Icons>
        </StyledToolBar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

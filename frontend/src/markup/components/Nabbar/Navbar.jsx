import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Media query for responsive design

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="logo"
        width="50"
      />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        {isMobile && (
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
        )}
        <ListItem button component={Link} to="/orders">
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Who we are" />
        </ListItem>
        <ListItem button component={Link} to="/register">
          <ListItemText primary="Register" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#FFF3E7", color: "black",maxWidth:"100%"}}>
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                My App
              </Typography>
              <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                  "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="logo"
                width="50"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <Button
                  color="inherit"
                  component={Link}
                  to="/"
                  sx={{
                    "&:hover": {
                      color: "#FF8C14",
                      backgroundColor: "#FFF3E7",
                    },
                  }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/menu/orders"
                  sx={{
                    "&:hover": {
                      color: "#FF8C14",
                      backgroundColor: "#FFF3E7",
                    },
                  }}
                >
                  Orders
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/contact"
                  sx={{
                    "&:hover": {
                      color: "#FF8C14",
                      backgroundColor: "#FFF3E7",
                    },
                  }}
                >
                  Who we are
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/signup"
                  sx={{
                    "&:hover": {
                      color: "#FF8C14",
                      backgroundColor: "#FFF3E7",
                    },
                  }}
                >
                  Register
                </Button>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Typography,
  Link as MuiLink,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom"; // Ensure Link is imported

const Footer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFF3E7", mt: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack vertically on mobile
            justifyContent: "space-between",
            alignItems: "center",
            py: 3,
          }}
        >
          {/* <Box sx={{ display: 'flex', justifyContent: 'space-around', py: 5 }}> */}
          <Box
            sx={{
              display: { xs: "block", md: "flex" }, // Block on mobile, flex on larger screens
              justifyContent: "space-around",
              width: { xs: "100%", sm: "auto" }, // Full width on mobile
              mb: { xs: 2, sm: 0 }, // Margin bottom for mobile
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                color: "#000000",
                "&:hover": {
                  color: "#ffffff",
                  textDecoration: "underline",
                  backgroundColor: "#FFF3E7",
                },
                width: { xs: "100%", sm: "auto" }, // Full width on mobile
                mb: { xs: 1, sm: 0 }, // Margin bottom for mobile
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/menu/orders"
              sx={{
                color: "#000000",
                "&:hover": {
                  color: "#FF8C14",
                  backgroundColor: "#FFF3E7",
                  textDecoration: "underline",
                },
                width: { xs: "100%", sm: "auto" }, // Full width on mobile
                mb: { xs: 1, sm: 0 }, // Margin bottom for mobile
              }}
            >
              Orders
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={{
                color: "#000000",
                "&:hover": {
                  color: "#FF8C14",
                  textDecoration: "underline",
                  backgroundColor: "#FFF3E7",
                },
                width: { xs: "100%", sm: "auto" }, // Full width on mobile
              }}
            >
              About Us
            </Button>
          </Box>
          <Box sx={{ display: "block", alignItems: "center" }}>
            <Typography
              color="black"
              sx={{ ml: 2, display: { xs: "none", sm: "flex" } }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Pizza Logo"
                width={50}
              />
              pizza
            </Typography>

            <Typography variant="h6" color="black" sx={{ ml: 2 }}>
              <TextField
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
                sx={{ mt: { xs: 2, sm: 2 }, width: { xs: "100%", sm: "auto" } }}
              />
            </Typography>
          </Box>
        </Box>

        {/* </Box> */}
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: { xs: 2, sm: 0, backgroundColor: "#000000" },
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", mt: { xs: 2, sm: 0 } }}
        >
          <Typography
            variant="body1"
            color="white"
            sx={{ mt: { xs: 2, md: 0 }, py: 5, ml: 2 }}
          >
            © {new Date().getFullYear()} Pizza. All rights reserved.
          </Typography>
          <MuiLink href="/privacy-policy" color="inherit" sx={{ ml: 2 }}>
            Privacy Policy
          </MuiLink>
          <MuiLink href="/terms-of-service" color="inherit" sx={{ ml: 2 }}>
            Terms of Service
          </MuiLink>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            mr: 5,
          }}
        >
          <IconButton
            href="https://www.facebook.com"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="https://www.instagram.com"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            href="https://www.twitter.com"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Footer;

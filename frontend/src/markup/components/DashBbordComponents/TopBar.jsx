import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Notifications, Settings } from "@mui/icons-material";

const TopBar = ({ title, toggleDrawer }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, pb: 2 }} // Bottom padding can be adjusted based on your needs
    >
      <Toolbar sx={{ justifyContent: "space-between", paddingBottom: 0 }}>
        {/* Left side: Hamburger and Title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Hamburger Menu Icon */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Title */}
          <Typography variant="h6" sx={{ paddingBottom: "0px", fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            {title}
          </Typography>
        </Box>

        {/* Right side: Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Notification Icon with Badge */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>

          {/* Settings Icon */}
          <IconButton color="inherit">
            <Settings />
          </IconButton>

          {/* User Profile Avatar */}
          <IconButton color="inherit">
            <Avatar alt="Profile" src="/profile-pic.jpg" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

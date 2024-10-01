import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Avatar, Box } from '@mui/material';
import { Notifications, Settings } from '@mui/icons-material';

const TopBar = ({ title }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side: Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        {/* Right side: Icons */}
        <Box>
          {/* Notification Icon with Badge */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error"> {/* Example badge number */}
              <Notifications />
            </Badge>
          </IconButton>

          {/* Settings Icon */}
          <IconButton color="inherit">
            <Settings />
          </IconButton>

          {/* User Profile Avatar */}
          <IconButton color="inherit">
            <Avatar alt="Profile" src="/profile-pic.jpg" /> {/* You can replace with dynamic profile */}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

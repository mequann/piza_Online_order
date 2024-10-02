// src/components/DashBbordComponents/Sidebar.js

import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {
  MenuBook,
  People,
  ShoppingCart,
  AccountCircle,
  ExitToApp,
} from '@mui/icons-material';
import { useTheme, useMediaQuery } from '@mui/material';

const drawerWidth = 240; // Define the width of the drawer

const Sidebar = ({ isDrawerOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is small

  const handleLogout = () => {
    navigate('/login');
  };

  // Content inside the Drawer
  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      role="presentation"
      onClick={isMobile ? toggleDrawer : undefined} // Close drawer on mobile when clicking a link
      onKeyDown={isMobile ? toggleDrawer : undefined}
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/menu/orders"
          sx={{ marginTop: '70px' }}
        >
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to="/menu/add-menu">
          <ListItemIcon>
            <MenuBook />
          </ListItemIcon>
          <ListItemText primary="Add Menu" />
        </ListItem>
        <ListItem button component={Link} to="/menu/roles">
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Roles" />
        </ListItem>
        <ListItem button component={Link} to="/menu/users">
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
      <Divider />
      {/* Logout Button at the Bottom */}
      <Box sx={{ flexGrow: 1 }} />
      <List>
        <ListItem button onClick={handleLogout} sx={{ marginBottom: '20px' }}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      {/* Temporary Drawer for mobile */}
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;

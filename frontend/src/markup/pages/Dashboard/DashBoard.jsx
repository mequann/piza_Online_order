// src/pages/Dashboard.js

import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Sidebar from '../../components/DashBbordComponents/SideBar';
import TopBar from '../../components/DashBbordComponents/TopBar';
import { Outlet, useLocation } from 'react-router-dom'; // useLocation to track the current route

const drawerWidth = 240; // Define the width of the sidebar

const Dashboard = () => {
  const [title, setTitle] = useState('Dashboard');
  const location = useLocation(); // Gets the current location object
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is small
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility

  // Update the title based on the current route
  useEffect(() => {
    switch (location.pathname) {
      case '/menu/orders':
        setTitle('Orders');
        break;
      case '/menu/add-menu':
        setTitle('Add Menu');
        break;
      case '/menu/roles':
        setTitle('Roles');
        break;
      case '/menu/users':
        setTitle('Users');
        break;
      default:
        setTitle('Dashboard');
        break;
    }
  }, [location.pathname]);

  // Function to toggle the sidebar drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* TopBar with the toggleDrawer prop */}
      <TopBar title={title} toggleDrawer={toggleDrawer} />

      {/* Sidebar controlled by isDrawerOpen and responsive */}
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginTop: '4px', 
          transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: isDrawerOpen && !isMobile ? `${drawerWidth}px` : '0',
        }}
      >
        <Outlet /> {/* Render the corresponding route content */}
      </Box>
    </Box>
  );
};

export default Dashboard;

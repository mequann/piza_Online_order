import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../../components/DashBbordComponents/SideBar';
import TopBar from '../../components/DashBbordComponents/TopBar';
import { Outlet, useLocation } from 'react-router-dom'; // useLocation to track the current route

const Dashboard = () => {
  const [title, setTitle] = useState('Dashboard');
  const location = useLocation(); // Gets the current location object

  // Update the title based on the current route
  useEffect(() => {
    switch (location.pathname) {
      case '/menu/orders': // Updated to reflect the correct path
        setTitle('Orders');
        break;
      case '/menu/add-menu': // Updated to reflect the correct path
        setTitle('Add Menu');
        break;
      case '/menu/roles': // Updated to reflect the correct path
        setTitle('Roles');
        break;
      case '/menu/users': // Updated to reflect the correct path
        setTitle('Users');
        break;
      default:
        setTitle('Dashboard');
        break;
    }
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Pass the title dynamically to the TopBar */}
      <TopBar title={title} />

      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar stays static */}
        <Sidebar />

        {/* Main content area where different components will render */}
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Outlet /> {/* This will render the corresponding child route */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

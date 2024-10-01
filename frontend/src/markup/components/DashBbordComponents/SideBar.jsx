import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { MenuBook, People, ShoppingCart, AccountCircle, ExitToApp } from '@mui/icons-material';

const Sidebar = () => {
  const navigate = useNavigate(); // For navigation after logout

  const handleLogout = () => {
  navigate('/login');
  };

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} to="/menu/orders" sx={{ marginTop: "70px" }}>
          <ListItemIcon><ShoppingCart /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to="/menu/add-menu">
          <ListItemIcon><MenuBook /></ListItemIcon>
          <ListItemText primary="Add Menu" />
        </ListItem>
        <ListItem button component={Link} to="/menu/roles">
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Roles" />
        </ListItem>
        <ListItem button component={Link} to="/menu/users">
          <ListItemIcon><AccountCircle /></ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>

      {/* Logout Button at the Bottom */}
      <Box sx={{ flexGrow: 1 }} /> 
      <ListItem button onClick={handleLogout} sx={{ marginBottom: "20px" }}>
        <ListItemIcon><ExitToApp /></ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </Drawer>
  );
};

export default Sidebar;

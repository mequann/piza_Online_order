import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { MenuBook, People, ShoppingCart, AccountCircle } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} to="/menu/orders" sx={{ marginTop: "70px" }}>
          <ListItemIcon><ShoppingCart /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/add-menu">
          <ListItemIcon><MenuBook /></ListItemIcon>
          <ListItemText primary="Add Menu" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/roles">
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Roles" />
        </ListItem>
        <ListItem button component={Link} to="/menu/users">
          <ListItemIcon><AccountCircle /></ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

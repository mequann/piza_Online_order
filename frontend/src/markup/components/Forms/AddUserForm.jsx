// src/components/AddUserForm.js

import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, Button, InputLabel, FormControl } from '@mui/material';

const roles = ['Admin', 'User', 'Editor', 'Viewer']; // Example roles

const AddUserForm = ({ open, handleClose, handleAddUser }) => {
  const [newUser, setNewUser] = useState({
    full_name:'',
    email: '',
    password: '',
    phone: '',
    role: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    handleAddUser(newUser);
    handleClose(); 
    setNewUser({ full_name: '', email: '', password: '', phone: '', role: '' }); 
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        {/* Name Input */}
        <TextField
          label="Name"
          variant="outlined"
          name="full_name"
          value={newUser.name}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ my: 2 }}
        />
        {/* Email Input */}
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ my: 2 }}
        />
        {/* Password Input */}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ my: 2 }}
        />
        {/* Phone Number Input */}
        <TextField
          label="Phone Number"
          variant="outlined"
          type="tel"
          name="phone"
          value={newUser.phone}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ my: 2 }}
        />
        {/* Role Dropdown */}
        <FormControl fullWidth required sx={{ my: 2 }}>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
            label="Role"
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Add User</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserForm;

import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography, Checkbox } from '@mui/material';

const AddRoleForm = ({ open, handleClose, handleAddRole }) => {
  const [newRole, setNewRole] = useState({
    name: '',
    permissions: {
      addUsers: false,
      updateOrderStatus: false,
      createRole: false,
      seeCustomers: false,
      seeOrders: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRole((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNewRole((prevData) => ({
      ...prevData,
      permissions: {
        ...prevData.permissions,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = () => {
    handleAddRole({ ...newRole, createdAt: new Date() }); // Pass the new role with a created date
    handleClose(); // Close the modal after submission
    setNewRole({ name: '', permissions: {} }); // Reset form fields
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Role</DialogTitle>
      <DialogContent>
        {/* Role Name Input */}
        <TextField
          label="Role Name"
          variant="outlined"
          name="name"
          value={newRole.name}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ my: 2 }}
        />
        <Typography variant="body2" color="text.secondary">
          Permissions
        </Typography>
        
        {/* Permissions Checkboxes */}
        {Object.keys(newRole.permissions).map((permission) => (
          <div key={permission} style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
            <Checkbox
              checked={newRole.permissions[permission]}
              onChange={handleCheckboxChange}
              name={permission}
              sx={{
                color: newRole.permissions[permission] ? 'white' : undefined,
                backgroundColor: newRole.permissions[permission] ? 'orange' : undefined,
                '&.Mui-checked': {
                  color: 'white', // Change the check mark color to white
                  backgroundColor: 'orange', // Background color when checked
                  borderRadius: '4px', // Optional: Rounded corners for better aesthetics
                },
              }}
            />
            <Typography variant="body1">{permission.replace(/([A-Z])/g, ' $1')}</Typography>
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Add Role</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddRoleForm;

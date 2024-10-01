import React, { useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Switch, Button } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete'; // Importing the trash icon
import AddUserForm from '../Forms/AddUserForm';
const UserTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', phone: '+251 1234567890', email: 'john@example.com', isActive: true },
    { id: 2, name: 'Jane Smith', phone: '+251 0987654321', email: 'jane@example.com', isActive: false },
    { id: 3, name: 'Alice Johnson', phone: '+251 5678901234', email: 'alice@example.com', isActive: true },
  ]);
  const [open, setOpen] = useState(false);

  const handleToggleActive = (rowIndex) => {
    const updatedData = [...data];
    updatedData[rowIndex].isActive = !updatedData[rowIndex].isActive; // Toggle active status
    setData(updatedData);
  };

  const handleDeleteUser = (rowIndex) => {
    const updatedData = data.filter((_, index) => index !== rowIndex); // Delete user by index
    setData(updatedData);
  };

  const handleAddUser = () => {
    // Logic to add a new user (implement your own logic here)
    console.log("Add User button clicked!");
  };
  const handleOpen = () => setOpen(true); // Open modal
  const handleClose = () => setOpen(false); // Close modal

  const columns = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'phone', header: 'Phone' },
    { accessorKey: 'email', header: 'Email' },
    {
      accessorKey: 'isActive',
      header: 'Status',
      Cell: ({ cell, row }) => (
        <Button
          variant="contained"
          sx={{
            backgroundColor: cell.getValue() ? 'green' : 'red', 
            color: 'white',
            borderRadius: '20px',
            padding: '0px 4px',  
            '&:hover': {
              backgroundColor: cell.getValue() ? 'darkgreen' : 'darkred',
            },
          }}
          onClick={() => handleToggleActive(row.index)} // Switch toggles on click
        >
          <Switch
            checked={cell.getValue()} // Active state for the switch
            onClick={() => handleToggleActive(row.index)} // Toggle active status on click
            color="default"
            sx={{ pointerEvents: 'none' }} // Disable dragging interaction on the switch
          />
          {cell.getValue() ? 'Active' : 'Inactive'}
        </Button>
      ),
    },
    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ row }) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDeleteUser(row.index)}
          sx={{ minWidth: 'auto', padding: '6px', backgroundColor: 'darkgray', borderRadius: '12px' }} // Curved corners for delete button
        >
          <DeleteIcon fontSize="small" /> {/* Using trash icon */}
        </Button>
      ),
    },
  ];

  const table = useMaterialReactTable({
    data,
    columns,
    enableRowSelection: false,
    // Adding a title to the top-left of the top toolbar
    renderTopToolbarCustomActions: () => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 5 }}>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ backgroundColor: 'orange', py: 1, color: 'white', '&:hover': { backgroundColor: 'darkred' }, borderRadius: '20px' }}
        >
          Add User
        </Button>
      </Box>
    ),
  });

  return (
  <>
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
      <MaterialReactTable 
        table={table} 
        sx={{ 
          width: '100%', 
          maxWidth: '1200px', 
          '& .MuiTableRow-root': { height: '40px' } // Adjust row height here
        }} 
      />
    </Box>
    {/* Modal for Adding a New User */}
    <AddUserForm 
    open={open} 
    handleClose={handleClose} 
    handleAddUser={handleAddUser} 
  />
  </>
  );
};

export default UserTable;

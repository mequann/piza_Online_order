import React, { useEffect, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Switch, Button } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import AddUserForm from '../Forms/AddUserForm';
import api from '../../../util/api';

const UserTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', phone: '+251 1234567890', email: 'john@example.com', isActive: true },
    { id: 2, name: 'Jane Smith', phone: '+251 0987654321', email: 'jane@example.com', isActive: false },
    { id: 3, name: 'Alice Johnson', phone: '+251 5678901234', email: 'alice@example.com', isActive: true },
  ]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/users');
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const handleToggleActive = (rowIndex) => {
    const updatedData = [...data];
    updatedData[rowIndex].isActive = !updatedData[rowIndex].isActive;
    setData(updatedData);
  };

  const handleDeleteUser = (rowIndex) => {
    const updatedData = data.filter((_, index) => index !== rowIndex);
    setData(updatedData);
  };

  const handleAddUser = async (newUser) => {
    try {
      const response = await api.post('/users', newUser);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            padding: '0px 2px',
            fontSize: { xs: '10px', sm: '12px' }, // Responsive font size
            '&:hover': {
              backgroundColor: cell.getValue() ? 'darkgreen' : 'darkred',
            },
          }}
          onClick={() => handleToggleActive(row.index)}
        >
          <Switch
            checked={cell.getValue()}
            onClick={() => handleToggleActive(row.index)}
            color="default"
            size='small'
            sx={{ pointerEvents: 'none' }}
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
          sx={{ minWidth: 'auto', padding: '6px', backgroundColor: 'darkgray', borderRadius: '12px' }}
        >
          <DeleteIcon fontSize="small" />
        </Button>
      ),
    },
  ];

  const table = useMaterialReactTable({
    data,
    columns,
    enableRowSelection: false,
    renderTopToolbarCustomActions: () => (
      <Box sx={{ ml: 2, justifyContent: 'center' }}>
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
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4, mx: { xs: 2, sm: 'auto' } }}>
        <MaterialReactTable
          table={table}
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: '1200px' }, // Responsive max width
            '& .MuiTableRow-root': { height: 'auto' },
            overflowX: 'auto', // Enable horizontal scrolling on small screens
          }}
        />
      </Box>
      <AddUserForm
        open={open}
        handleClose={handleClose}
        handleAddUser={handleAddUser}
      />
    </>
  );
};

export default UserTable;

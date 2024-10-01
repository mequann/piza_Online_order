import React, { useState } from 'react';
import { MaterialReactTable } from 'material-react-table'; 
import { MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';

const OrdersTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Pizza', topping: 'Toppings', quantity: 4, customerNo: '+251 1523654789', createdAt: '2:44 PM 8/14/24', status: 'Preparing' },
    { id: 2, name: 'Pizza', topping: 'Toppings', quantity: 3, customerNo: '+251 1523654789', createdAt: '2:44 PM 8/14/24', status: 'Ready' },
    { id: 3, name: 'Pizza', topping: 'Toppings', quantity: 1, customerNo: '+251 1523654789', createdAt: '2:44 PM 8/14/24', status: 'Delivered' },
  ]);

  const handleStatusChange = (event, rowIndex) => {
    const updatedData = [...data];
    updatedData[rowIndex].status = event.target.value;
    setData(updatedData);
  };

  const columns = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'topping', header: 'Topping' },
    { accessorKey: 'quantity', header: 'Quantity' },
    { accessorKey: 'customerNo', header: 'Customer No' },
    { accessorKey: 'createdAt', header: 'Created at' },
    {
      accessorKey: 'status',
      header: 'Status',
      Cell: ({ cell, row }) => (
        <Select
          value={cell.getValue()}
          onChange={(event) => handleStatusChange(event, row.index)}
        >
          <MenuItem value="Preparing">Preparing</MenuItem>
          <MenuItem value="Ready">Ready</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
        </Select>
      ),
    },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mx: 2, my: 4, overflowX: 'hidden' }}>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableSorting={true}
        enablePagination={true}
        enableExport={true}
        sx={{ width: '100%', overflowX: 'hidden' }} // Make table responsive
      />
    </Box>
  );
};

export default OrdersTable;

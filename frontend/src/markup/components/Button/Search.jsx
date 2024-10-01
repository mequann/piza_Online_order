import React from 'react';
import { IconButton, TextField, Box } from '@mui/material';

const Search = ({ icon, handleSearch, sx }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}> 
      <TextField 
        variant="outlined"
        placeholder="Search..."  
        size="small"
        onChange={handleSearch}
        sx={{ mr: 1 }}  
      />
      <IconButton>
        {icon}  
      </IconButton>
    </Box>
  );
};

export default Search;

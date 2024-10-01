import React from 'react';
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  
} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';


const SignUp = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Side: Image */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: 'orange',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={logo} alt="Logo" style={{ maxWidth: '80%', height: 'auto' }} />
      </Box>

      {/* Right Side: Sign Up Form */}
      <Box
        sx={{
          flex: 1,
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflowY: 'auto', // Allows vertical scrolling
        }}
      >
        {/* Logo Image at the Top of the Form */}
        <Box sx={{ display: 'flex', justifyContent: '', mb: 3 }}>
          <img src={logo} alt="Logo" style={{ maxWidth: '10%', height: 'auto' }} />
          <Typography color='orange'p={2}> pizza</Typography>   
        </Box>
        
        <form>
          <TextField
            label="Admin Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Restaurant Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="outlined"
            component="label"
            fullWidth
            margin="normal"
          >
            Upload Image
            <input type="file" hidden />
          </Button>
          <FormControlLabel
            control={<Checkbox name="terms" />}
            label="Accept Terms and Conditions"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: '20px', backgroundColor:"orange"}}
          >
            Sign Up
          </Button>
        </form>
        <Typography sx={{ marginTop: '20px' }}>
          Already have an account? <Link to="/login" style={{color:"orange"}}>Login</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;

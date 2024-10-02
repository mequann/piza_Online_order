import React from "react";
import logo from "../../../assets/logo.png";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../util/api";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const Navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    try {
      
      e.preventDefault();
    // Add your login submission logic here
     const res =await api.post('/login',formData)
     if(res){
      const token = res.data.token;
      console.log(token)
       localStorage.setItem('token', token);
      console.log(res.data)
     }
     Navigate('/menu/orders')

    } catch (error) {
      console.log(error)
      return error
      
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Side: Logo */}
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

      {/* Right Side: Login Form */}
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
        {/* Logo at the Top of the Form */}
        <Box sx={{ display: 'flex', justifyContent: '', mb: 3 }}>
          <img src={logo} alt="Logo" style={{ maxWidth: '10%', height: 'auto' }} />
          <Typography color='orange'p={2}> pizza</Typography> 
        </Box>

        <Typography variant="h4" gutterBottom align="center">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Email Address */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Login Button */}
            <Grid item xs={12}>
              <Button 
                type="submit"
                variant="contained"
                fullWidth
                style={{color:"white",backgroundColor:"orange"}}
              >
                Login
              </Button>
            </Grid>

            {/* Don't Have an Account */}
            <Grid item xs={12}>
              <Typography align="center">
                Don't have an account?{" "}
                <Link to="/signup" underline="hover" style={{color:"orange"}}>
                  Sign Up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Login;

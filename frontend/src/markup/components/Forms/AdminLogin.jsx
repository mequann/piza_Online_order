import React from "react";
import logo from "../../../assets/logo.png";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = React.useState({
    adminName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login submission logic here
    console.log(formData);
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

      {/* Right Side: Admin Login Form */}
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
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <img src={logo} alt="Logo" style={{ maxWidth: '10%', height: 'auto' }} />
        </Box>

        <Typography variant="h4" gutterBottom align="center">
          Add Admin
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Admin Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Admin Name"
                name="adminName"
                value={formData.adminName}
                onChange={handleChange}
                required
              />
            </Grid>

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

            {/* Phone Number */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                type="tel"
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

            {/* Confirm Password */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Continue Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                style={{ color: "white", backgroundColor: "orange" }}
              >
                Continue
              </Button>
            </Grid>

            {/* Link to Existing Admin Login */}
            <Grid item xs={12}>
              <Typography align="center">
                Already have an account?{" "}
                <Link to="/admin-login" underline="hover" style={{ color: "orange" }}>
                  Login
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default AdminLogin;

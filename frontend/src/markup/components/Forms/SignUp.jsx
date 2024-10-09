import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import api from "../../../util/api";

const SignUp = () => {
  const [formData, setFormData] = useState({
    adminName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    restaurantName: "",
    location: "",
    image: null,
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.restaurantName || !formData.adminName) {
      alert("Please fill in the required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.termsAccepted) {
      alert("You must accept the terms and conditions.");
      return;
    }

    // Prepare form data for submission
    const data = new FormData();
    data.append("adminName", formData.adminName);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("restaurantName", formData.restaurantName);
    data.append("location", formData.location);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await api.post("/restaurants", data, config);
      console.log("Form submitted successfully:", response.data);
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      adminName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      restaurantName: "",
      location: "",
      image: null,
      termsAccepted: false,
    });
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Side: Image */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "orange",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="Logo" style={{ maxWidth: "80%", height: "auto" }} />
      </Box>

      {/* Right Side: Sign Up Form */}
      <Box
        sx={{
          flex: 1,
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        {/* Form Title */}
        <Box sx={{ display: "flex", justifyContent: "", mb: 3 }}>
          <img src={logo} alt="Logo" style={{ maxWidth: "10%", height: "auto" }} />
          <Typography color="orange" p={2}>
            Pizza
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          {/* Input Fields */}
          <TextField
            label="Admin Name"
            variant="outlined"
            name="adminName"
            value={formData.adminName}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ my: 2 }}
          />

          <TextField
            label="Email Address"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ my: 2 }}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ my: 2 }}
          />

          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ my: 2 }}
          />

          <TextField
            label="Phone Number"
            variant="outlined"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ my: 2 }}
          />

          <TextField
            label="Restaurant Name"
            variant="outlined"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ my: 2 }}
          />

          <TextField
            label="Location"
            variant="outlined"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ my: 2 }}
          />

          {/* Image Upload */}
          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{ my: 2 }}
          >
            Upload Restaurant Image
            <input
              type="file"
              name="image"
              hidden
              onChange={handleInputChange}
            />
          </Button>

          {/* Terms and Conditions */}
          <FormControlLabel
            control={
              <Checkbox
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
              />
            }
            label="Accept Terms and Conditions"
            sx={{ my: 2 }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2, backgroundColor: "orange" }}
          >
            Add Restaurant
          </Button>

          {/* Link to Sign In */}
          <Typography sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "orange" }}>
              Sign In
            </Link>
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;

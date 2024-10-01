import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  Grid,
} from "@mui/material";

const AddMenuForm = () => {
  const [newMenu, setNewMenu] = useState({
    name: "",
    toppings: {
      mozzarella: false,
      tomato: false,
      bellPeppers: false,
      onions: false,
      olives: false,
    },
    customToppings: [], // Array to hold custom toppings with checkbox
    price: "",
    photo: null,
    newCustomTopping: "", // State for the new custom topping
    showCustomInput: false, // State to show/hide custom topping input
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenu((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToppingChange = (topping) => {
    setNewMenu((prevData) => ({
      ...prevData,
      toppings: {
        ...prevData.toppings,
        [topping]: !prevData.toppings[topping],
      },
    }));
  };

  const handleNewCustomToppingChange = (e) => {
    setNewMenu((prevData) => ({
      ...prevData,
      newCustomTopping: e.target.value,
    }));
  };

  const addCustomTopping = () => {
    if (newMenu.newCustomTopping.trim()) {
      const customToppingKey = newMenu.newCustomTopping
        .toLowerCase()
        .replace(/\s+/g, "");
      setNewMenu((prevData) => ({
        ...prevData,
        customToppings: [
          ...prevData.customToppings,
          {
            name: newMenu.newCustomTopping,
            checked: true,
            key: customToppingKey,
          }, // Create a custom topping object
        ],
        newCustomTopping: "", // Reset input field after adding
        showCustomInput: false, // Hide input after adding
      }));
    }
  };

  const handleCustomToppingChange = (key) => {
    setNewMenu((prevData) => ({
      ...prevData,
      customToppings: prevData.customToppings.map((topping) =>
        topping.key === key
          ? { ...topping, checked: !topping.checked }
          : topping
      ),
    }));
  };

  const handlePhotoChange = (e) => {
    setNewMenu((prevData) => ({
      ...prevData,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = () => {
    // Handle add menu logic here
    console.log({ ...newMenu, createdAt: new Date() });
    resetForm();
  };

  const resetForm = () => {
    setNewMenu({
      name: "",
      toppings: {
        mozzarella: false,
        tomato: false,
        bellPeppers: false,
        onions: false,
        olives: false,
      },
      customToppings: [],
      price: "",
      photo: null,
      newCustomTopping: "", // Reset new custom topping input
      showCustomInput: false, // Reset custom input visibility
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Add Menu Item
      </Typography>

      <Box sx={{ width: "100%", maxWidth: "600px", mx: "auto" }}>
        {/* Menu Name Input */}
        <TextField
          label="Menu Name"
          variant="outlined"
          name="name"
          value={newMenu.name}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ my: 2 }}
        />

        {/* Toppings Selection */}
        <Typography variant="h6" sx={{ my: 2 }}>
          Toppings
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          {Object.keys(newMenu.toppings).map((topping) => (
            <Grid item xs={12} sm={6} key={topping}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={newMenu.toppings[topping]}
                    onChange={() => handleToppingChange(topping)}
                  />
                }
                label={topping.charAt(0).toUpperCase() + topping.slice(1)}
              />
            </Grid>
          ))}

          {/* New Custom Topping Input Button */}
          {!newMenu.showCustomInput && (
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                sx={{ borderRadius: "10px", backgroundColor: "orange" }}
                onClick={() =>
                  setNewMenu((prev) => ({ ...prev, showCustomInput: true }))
                }
              >
                + Add
              </Button>
            </Grid>
          )}

          {/* New Custom Topping Input Field */}
          {newMenu.showCustomInput && (
            <Grid item xs={12} sm={6}>
              <TextField
                label="New Topping"
                variant="outlined"
                value={newMenu.newCustomTopping}
                onChange={handleNewCustomToppingChange}
                fullWidth
                sx={{ mr: 1 }}
              />
              <Button
                variant="outlined"
                onClick={addCustomTopping}
                sx={{ width: "6px" }}
              >
                Add
              </Button>
            </Grid>
          )}
        </Grid>

        {/* Render Custom Toppings with Checkbox */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ width: "100%", mt: 2 }}
        >
          {newMenu.customToppings.map((topping) => (
            <Grid item xs={12} sm={6} key={topping.key}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={topping.checked}
                    onChange={() => handleCustomToppingChange(topping.key)}
                  />
                }
                label={topping.name}
              />
            </Grid>
          ))}
        </Grid>

        {/* Price Input */}
        <TextField
          label="Price"
          variant="outlined"
          name="price"
          value={newMenu.price}
          onChange={handleInputChange}
          fullWidth
          required
          type="number"
          sx={{ my: 2 }}
        />

        {/* Photo Upload */}
        <Button
          variant="contained"
          component="label"
          sx={{ my: 2, backgroundColor: "orange" }}
        >
          Upload Pizza Photo
          <input type="file" hidden onChange={handlePhotoChange} />
        </Button>

        {/* Actions */}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button onClick={resetForm} color="error" sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="warning"
            sx={{ backgroundColor: "orange" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddMenuForm;

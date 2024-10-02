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
import api from "../../../util/api";

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
    customToppings: [],
    price: "",
    image: null,
    newCustomTopping: "",
    showCustomInput: false,
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
          },
        ],
        newCustomTopping: "",
        showCustomInput: false,
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
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const formData = new FormData();
    formData.append("name", newMenu.name);
    formData.append("price", newMenu.price);
    formData.append("image", newMenu.image);
    formData.append("toppings", JSON.stringify(Object.keys(newMenu.toppings).filter(topping => newMenu.toppings[topping])));
    formData.append("customToppings", JSON.stringify(newMenu.customToppings));
    try {
      const token = localStorage.getItem('token');
      console.log(token,'kkkkkkkkkkkk')
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'multipart/form-data',
      },
    };

      const response = await api.post("/menu", formData,config);
      console.log(response.data, "from add menu");
    } catch (error) {
      console.log(error,"hhhhhhhhhhhhhhhh");
    }
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
      image: null,
      newCustomTopping: "",
      showCustomInput: false,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "1rem",
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
        <Grid container spacing={2} sx={{ width: "100%" }}>
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
                sx={{
                  borderRadius: "50px",
                  backgroundColor: "orange",
                  width: "100%",
                }}
                variant="outlined"
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
            <Grid item xs={12}>
              <TextField
                label="New Topping"
                variant="outlined"
                value={newMenu.newCustomTopping}
                onChange={handleNewCustomToppingChange}
                fullWidth
              />
              <Button
                variant="contained"
                onClick={addCustomTopping}
                sx={{ mt: 1 }}
              >
                Add
              </Button>
            </Grid>
          )}
        </Grid>

        {/* Render Custom Toppings with Checkbox */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
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
          fullWidth
          sx={{ my: 2, backgroundColor: "orange" }}
        >
          Upload Pizza Photo
          <input type="file" hidden onChange={handlePhotoChange} />
        </Button>

        {/* Actions */}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button onClick={resetForm} color="error" fullWidth sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            fullWidth
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

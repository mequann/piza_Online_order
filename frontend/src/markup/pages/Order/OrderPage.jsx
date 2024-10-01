import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, Typography, Checkbox, FormControlLabel, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const OrderPage = () => {
  const location = useLocation();
  const { name, toppings: initialToppings, price, photo } = location.state;  // Get pizza data passed via state

  const [quantity, setQuantity] = useState(1);  // Default quantity is 1
  const [selectedToppings, setSelectedToppings] = useState(initialToppings);  // Manage selected toppings
  const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);  // Popup state for successful order

  // Calculate total price based on quantity
  const totalPrice = (price * quantity).toFixed(2);

  // Increment quantity
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  // Decrement quantity (don't go below 1)
  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  // Handle Topping Selection
  const handleToppingChange = (event) => {
    const topping = event.target.name;
    setSelectedToppings(prevToppings => 
      prevToppings.includes(topping)
        ? prevToppings.filter(t => t !== topping)  // Deselect topping
        : [...prevToppings, topping]  // Select topping
    );
  };

  // Handle sending order and showing the popup
  const handleSendOrder = () => {
    setIsOrderPopupOpen(true);  // Open popup
  };

  // Close popup
  const handleClosePopup = () => {
    setIsOrderPopupOpen(false);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '20px', 
        height: '100vh'  // Center content vertically and horizontally
      }}
    >
      {/* Container for Image and Pizza Details */}
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '20px' }}>
        {/* Pizza Image */}
        <img 
          src={photo} 
          alt={name} 
          style={{ width: '300px', height: '300px', borderRadius: '8px' }} 
        />

        {/* Pizza Name and Toppings on the right of the image */}
        <Box>
          <Typography variant="h4">Order {name}</Typography>

          {/* Toppings Checkbox List */}
          <Typography variant="h6" sx={{ marginTop: '20px' }}>Choose Toppings:</Typography>
          {initialToppings.map(topping => (
            <FormControlLabel
              key={topping}
              control={
                <Checkbox
                  checked={selectedToppings.includes(topping)}
                  onChange={handleToppingChange}
                  name={topping}
                />
              }
              label={topping}
            />
          ))}

          {/* Quantity Counter */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <Button onClick={decrementQuantity} variant="contained" sx={{ backgroundColor: 'orange' }}>-</Button>
            <Typography sx={{ margin: '0 15px' }}>Quantity: {quantity}</Typography>
            <Button onClick={incrementQuantity} variant="contained" sx={{ backgroundColor: 'orange' }}>+</Button>
          </Box>

          {/* Total Price */}
          <Typography sx={{ marginTop: '20px' }} variant="h6">
            Total Price: ${totalPrice}
          </Typography>

          {/* Send Order Button */}
          <Button 
            variant="contained" 
            sx={{ 
              marginTop: '20px', 
              backgroundColor: 'orange', 
              '&:hover': { backgroundColor: 'darkorange' }  // Make button orange and change on hover
            }} 
            onClick={handleSendOrder}
            endIcon={<ArrowForward />}  // Add the arrow icon
          >
            Send Order
          </Button>
        </Box>
      </Box>

      {/* Order Success Popup */}
      <Dialog open={isOrderPopupOpen} onClose={handleClosePopup}>
        <DialogTitle>Order Successful</DialogTitle>
        <DialogContent>
          <Typography>Your order has been successfully sent!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrderPage;

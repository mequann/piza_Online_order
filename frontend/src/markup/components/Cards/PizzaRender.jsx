import React from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import piza_photo from "../../../assets/Imagepizza_photo.png";
const pizzas = [
  {
    name: "Pepperoni Pizza",
    toppings: ["Pepperoni", "Cheese", "Tomato Sauce"],
    photo: piza_photo,
    price: 12.99,
    restaurant: {
      name: "Pizza Palace",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  },
  {
    name: "Margherita Pizza",
    toppings: ["Tomato", "Basil", "Mozzarella"],
    photo: piza_photo,
    price: 10.99,
    restaurant: {
      name: "Italiano Pizzeria",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  },
  {
    name: "BBQ Chicken Pizza",
    toppings: ["BBQ Chicken", "Onions", "Cheese"],
    photo: piza_photo,
    price: 14.99,
    restaurant: {
      name: "Grill House",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  },
  {
    name: "Veggie Pizza",
    toppings: ["Bell Peppers", "Onions", "Mushrooms", "Olives"],
    photo: piza_photo,
    price: 11.99,
    restaurant: {
      name: "Green Garden Pizza",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  },
  {
    name: "Hawaiian Pizza",
    toppings: ["Ham", "Pineapple", "Cheese"],
    photo: piza_photo,
    price: 13.99,
    restaurant: {
      name: "Tropical Pizza",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  },
];

const PizzaRender = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 2 }}>
      {pizzas.map((pizza, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card pizza={pizza} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PizzaRender;

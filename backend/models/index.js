// models/index.js
const User = require("./userModel/usermodel");
const Restaurant = require("./restaurantmodel/restaurantM");
const Pizza = require("./pizzamodel/pizzaM");
const Topping = require("./toppingsmodel/toppingM");
const Order = require("./orderModel/orderM");
const Role = require("./roleModel/roleM");
const OrderItem = require("./orderItemModel/orderItemM");
const Pizza_topping = require("./pizza_toppingsmodel/pizza_toppingsM");

module.exports = {
  User,
  Restaurant,
  Pizza,
  Topping,
  Order,
  Role,
  OrderItem,
  Pizza_topping,
};

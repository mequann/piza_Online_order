const { User } = require("../models/userModel/usermodel").Users;
const { Restaurant } = require("../models/restaurantModel/restaurantM").Restaurants;
const { Pizza } = require("../models/pizzaModel/pizzaM").Pizzas;
const { Topping } = require("../models/toppingModel/toppingM").Poppings;
const { Order } = require("../models/orderModel/orderM").Orders;
const { Role } = require("../models/roleModel/roleM").Roles;
const { OrderItem } = require("../models/orderItemModel/orderItemM").OrderItems;
const { Pizza_topping } = require("../models/pizza_toppingsModel/pizza_toppingsM").Pizza_toppings;

// User associations
User.hasMany(Restaurant, { as: 'OwnedRestaurants', foreignKey: 'owner_id' });
User.hasMany(Order, { foreignKey: 'user_id' });
User.belongsToMany(Role, { through: 'UserRole' });

// Restaurant associations
Restaurant.belongsTo(User, { as: 'Owner', foreignKey: 'owner_id' });
Restaurant.hasMany(Pizza, { foreignKey: 'restaurant_id' });
Restaurant.hasMany(Order, { foreignKey: 'restaurant_id' });
Restaurant.hasMany(Role, { foreignKey: 'restaurant_id' });

// Pizza associations
Pizza.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
Pizza.belongsToMany(Topping, { through: 'PizzaTopping', foreignKey: 'pizza_id' });

// Topping associations
Topping.belongsToMany(Pizza, { through: 'PizzaTopping', foreignKey: 'topping_id' });
Topping.belongsToMany(OrderItem, { through: 'OrderItemTopping', foreignKey: 'topping_id' });

// Order associations
Order.belongsTo(User, { foreignKey: 'user_id' });
Order.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
Order.hasMany(OrderItem, { foreignKey: 'order_id' });

// OrderItem associations
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
OrderItem.belongsTo(Pizza, { foreignKey: 'pizza_id' });
OrderItem.belongsToMany(Topping, { through: 'OrderItemTopping', foreignKey: 'order_item_id' });

// Role associations
Role.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
Role.belongsToMany(User, { through: 'UserRole' });

const User = require("../userModel/usermodel");
const Restaurant = require("../restaurantmodel/restaurantM");
const Pizza = require("../pizzamodel/pizzaM");
const Topping = require("../toppingsmodel/toppingM");
const Order = require("../orderModel/orderM");
const Role = require("../roleModel/roleM");
const OrderItem = require("../orderItemModel/orderItemM");
const Pizza_topping = require("../pizza_toppingsmodel/pizza_toppingsM");
const RolePermission = require("../roleModel/role_permissionM");
const Permission = require("../roleModel/permissionM");

// Many-to-many relationship between Roles and Permissions
Role.belongsToMany(Permission, {
  through: RolePermission,
  foreignKey: "role_id",
});
Permission.belongsToMany(Role, {
  through: RolePermission,
  foreignKey: "permission_id",
});

// User associations

User.hasMany(Order, { foreignKey: "user_id" });
User.belongsTo(Role, { foreignKey: "role_id" });
Role.hasMany(User, { foreignKey: "role_id" });

// Restaurant associations
Restaurant.belongsTo(User, { as: "Owner", foreignKey: "owner_id" });
User.hasMany(Restaurant, { as: "OwnedRestaurants", foreignKey: "owner_id" });
Restaurant.hasMany(Pizza, { foreignKey: "restaurant_id" });
Order.belongsTo(Restaurant, { foreignKey: "restaurant_id" });
Restaurant.hasMany(Order, { foreignKey: "restaurant_id" });
// Role associations
Role.belongsTo(Restaurant, { foreignKey: "restaurant_id" });
Restaurant.hasMany(Role, { foreignKey: "restaurant_id" });

// Pizza associations
Pizza.belongsTo(Restaurant, { foreignKey: "restaurant_id" });
Pizza.belongsToMany(Topping, {
  through: "PizzaTopping",
  foreignKey: "pizza_id",
});

// Topping associations
Topping.belongsToMany(Pizza, {
  through: "PizzaTopping",
  foreignKey: "topping_id",
});
Topping.belongsToMany(OrderItem, {
  through: "OrderItemTopping",
  foreignKey: "topping_id",
});

// Order associations
Order.belongsTo(User, { foreignKey: "user_id" });
Order.hasMany(OrderItem, { foreignKey: "order_id" });

// OrderItem associations
OrderItem.belongsTo(Order, { foreignKey: "order_id" });
OrderItem.belongsTo(Pizza, { foreignKey: "pizza_id" });
OrderItem.belongsToMany(Topping, {
  through: "OrderItemTopping",
  foreignKey: "order_item_id",
});

// Role associations
Role.belongsTo(Restaurant, { foreignKey: "restaurant_id" });
// Role.belongsToMany(User, { through: "role_id" });

// Function to create users and roles
const createUsers = async (data) => {
  try {
    const { full_name, email, password, role } = data; // Destructure role properly
    if (!role) {
      throw new Error("Role is required to create a user.");
    }

    // Find or create the role by name
    const [roleInstance, created] = await Role.findOrCreate({
      where: { name: role },
    });

    // Ensure the roleInstance is valid before creating the user
    if (!roleInstance) {
      throw new Error(`Failed to find or create the role: ${role}`);
    }

    // Create the user with the role's ID (roleInstance.id)
    const user = await User.create({
      full_name,
      email,
      password,
      role_id: roleInstance.id, // Make sure the role_id is correctly assigned
    });

    console.log("User created successfully", user);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Ensure error bubbles up for proper handling
  }
};
const createRoles = async (data) => {
  try {
    const { name, permission } = data;
    const permissionInstances = [];

    // Create the role
    const role = await Role.create({ name });

    // Iterate over the provided permissions
    for (const perm of permission) {
      // Find or create each permission dynamically
      const [permissionInstance, created] = await Permission.findOrCreate({
        where: { permission: perm },
      });
      permissionInstances.push(permissionInstance);
    }

    // Add the permissions to the role
    await role.addPermissions(permissionInstances);

    console.log("Role created successfully", role);
    return role;
  } catch (error) {
    console.error("Error creating role:", error);
    throw error; // Ensure error bubbles up for proper handling
  }
};
const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUsers,
  createRoles,
  getAllRoles,
};

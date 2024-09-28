const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db_config");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    pizza_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Pizzas",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER, // To store the number of pizzas ordered
      allowNull: false,
      defaultValue: 1,
    },
    status: {
      type: DataTypes.ENUM("Preparing", "Ready", "Delivered", "Canceled"),
      allowNull: false,
      defaultValue: "Preparing",  // Default status for new orders
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

// Define associations here if needed, like belongsTo User, Pizza, etc.

module.exports = Order;

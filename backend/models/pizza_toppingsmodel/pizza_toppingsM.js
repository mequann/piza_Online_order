const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db_config");

const PizzaToppings = sequelize.define(
  "Pizza_toppings",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    pizza_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Pizzas", // Name of the related model
        key: "id",
      },
    },
    topping_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Toppings", 
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  
  }
);

module.exports = PizzaToppings;

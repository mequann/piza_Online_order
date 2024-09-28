const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db_config");
const Restaurant = sequelize.define(
  "Restaurant",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, //Automatically generate UUIDv4   b
      primaryKey: true,
      allowNull: false,
    },
    restaurant_name: {
      type: DataTypes.STRING(255),
      allowNull: false, // Name is required
    },
    //   superAdmin_name: {
    //     type: DataTypes.STRING(255),
    //     allowNull: false, // Name is required
    //   },
    //  address: {
    //     type: DataTypes.STRING(255),
    //     allowNull: false, // Location is required
    //   },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, // Description is required
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    owner_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      },
      // onDelete: 'SET NULL',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Restaurant;

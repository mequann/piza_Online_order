const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../../config/db_config");
const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Automatically generate UUIDv4
      primaryKey: true,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true, // Ensure email is unique
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true, // Optional field
    },
    role: {
      type: DataTypes.ENUM('CUSTOMER', 'SUPER_ADMIN', 'KITCHEN_MANAGER', 'RESTAURANT_MANAGER'), // Enum for role
      allowNull: true,
    },
    restaurant_id: {
      type: DataTypes.UUID,
      allowNull: true, // Nullable for customers
      references: {
        model: 'restaurants', // Assumes there's a 'restaurants' table
        key: 'id',
      },
      onDelete: 'SET NULL', // Set to NULL if referenced restaurant is deleted
    },
    
  }, {
    timestamps: true, // Auto
    underscored: true, // Use snake_case column names (e.g. created_at, updated_at)
    //freezeTableName: true, // Disables Sequelize's automatic pluralization of table names
  });

module.exports = User
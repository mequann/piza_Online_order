const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db_config");

const Pizza = sequelize.define(
  "Pizza",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    
   
    category: {
      type: DataTypes.ENUM("Featured", "Top", "Fast"),
      allowNull: true
    },
  },
  {
    timestamps: true,
  
    
  }
);



module.exports = Pizza;

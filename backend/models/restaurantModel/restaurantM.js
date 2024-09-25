const{DataTypes}=require('sequelize')
const {Sequelize}=require('../../config/db_config')
const Restaurant = Sequelize.define('Restaurant', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Automatically generate UUIDv4
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false, // Name is required
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false, // Location is required
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, // Description is required
    },
    owner_id: {
      type: DataTypes.UUID,
      allowNull: true, // Owner can be nullable after deletion
      references: {
        model: 'users', // Assumes there's a 'users' table
        key: 'id', // References 'id' in the 'users' table
      },
      onDelete: 'SET NULL', // Set owner_id to NULL if the user is deleted
    },
  }, {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
    underscored: true, // Use snake_case column names
   // freezeTableName: true, // Prevents Sequelize from pluralizing table names
  });
  
  // Sync the model with the database
//   sequelize.sync({ force: false })
//     .then(() => {
//       console.log('Restaurant table has been synchronized.');
//     })
//     .catch((err) => {
//       console.error('Error syncing Restaurant table:', err);
//     });
  
  module.exports = Restaurant;
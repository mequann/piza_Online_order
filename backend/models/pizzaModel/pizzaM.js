const { DataTypes } = require("sequellize");
const{Sequelize}=require('../../config/db_config')
const Pizza =new Sequelize.define('Pizza', {
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
    
    price: {
      type: DataTypes.FLOAT,
      allowNull: false, // Price is required
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false, // Description is required
    },
  
  restaurant_id: {
    type: DataTypes.UUID,
    allowNull: true, // Restaurant can be nullable after deletion
    references: {
      model: 'restaurants', 
      key: 'id', 
    },
    onDelete: 'SET NULL', 
  },
  catagory:{
    type:DataTypes.ENM('Featured', 'Top', 'Fast')
  }
}
  ,
  {  
    timestamps: true, 
    underscored: true, 
    //freezeTable   Name: true, 
}


)
module.exports =Pizza
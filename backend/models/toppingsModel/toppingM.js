const {DataTypes}=require('sequelize')

const sequelize=require("../../config/db_config");
const Topping = sequelize.define('Topping', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false, // Name is required
    }, 
},{
    timestamps: true,


}
)
module.exports=Topping
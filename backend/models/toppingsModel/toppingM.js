const {DataTypes}=require('sequelize')

const{Sequelize}="../../config/db_config"
const Topping = Sequelize.define('Topping', {
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
},{
    timestamps: true,
    underscored: true,

}
)
module.exports=Topping
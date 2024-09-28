const{DataTypes}=require('sequelize')
const sequelize=require('../../config/db_config')

const Permission = sequelize.define('Permission', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Automatically generate UUIDv4
      primaryKey: true,
      allowNull: false,
    },
   permission: {
      type: DataTypes.STRING(255),
      allowNull: false, 
    }},
    {
        timestamps: true,
    }
    )


module.exports=Permission
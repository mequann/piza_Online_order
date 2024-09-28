const{DataTypes}=require('sequelize')
const sequelize=require('../../config/db_config')
const role_Permission = sequelize.define('role_permission', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Automatically generate UUIDv4
        primaryKey: true,
        allowNull: false,
    },
    role_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Roles', 
            key: 'id',
        },
    },
    permission_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Permissions', 
            key: 'id',
        },
    },
});
module.exports=role_Permission
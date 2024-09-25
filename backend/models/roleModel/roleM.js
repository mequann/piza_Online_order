const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/dbConfig');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

// Role.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
module.exports = Role;

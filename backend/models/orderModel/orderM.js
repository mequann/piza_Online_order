const{DataTypes}=require('sequelize')
const {Sequelize}="../../config/db_config"

const Order = Sequelize.define('Order', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    total_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Preparing', 'Delivered', 'Canceled'),
        allowNull: false
    }
}, {
    timestamps: true
});

// Order.belongsTo(User, { foreignKey: 'user_id' });
// Order.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });

module.exports = Order;

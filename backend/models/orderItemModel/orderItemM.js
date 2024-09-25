const{DataTypes}=require('sequelize')
const {Sequelize}="../../config/db_config"
const OrderItem = Sequelize.define('OrderItem', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: true
});

// OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
// OrderItem.belongsTo(Pizza, { foreignKey: 'pizza_id' });

module.exports = OrderItem;

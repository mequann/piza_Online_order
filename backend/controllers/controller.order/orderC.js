const User = require("../../models/userModel/usermodel");
const Pizza = require("../../models/pizzamodel/pizzaM");
const Order = require("../../models/orderModel/orderM");
const Topping = require("../../models/toppingsmodel/toppingM");
const { z } = require("zod");

const orderSchema = z.object({
  total_price: z.number().optional(), // We'll calculate the total price
  user_id: z.string().uuid(),
  pizza_id: z.string().uuid(),
  order_status: z.string(),
  quantity: z.number().min(1), // Ensure count is passed and is a valid number
});
const createOrder = async (req, res) => {
  try {
    const { user_id, pizza_id, quantity } = orderSchema.parse(req.body);

    // Validate the input data
    if (!user_id || !pizza_id || !quantity) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Fetch pizza (including its toppings if needed for display purposes, but not affecting order logic)
    const pizza = await Pizza.findByPk(pizza_id, {
      include: [{ model: Topping, attributes: ["name"] }], // For display, not needed for price calculation
    });

    if (!pizza) {
      return res.status(404).json({ error: "Pizza not found" });
    }

    // Calculate the total price based on the pizza's price and quantity
    const totalPrice = parseFloat(pizza.price) * quantity;

    // Create the order
    const order = await Order.create({
      user_id,
      pizza_id,
      quantity,
      total_price: totalPrice,
      status: "Preparing", // Set default status to "Preparing"
    });

    // Return the created order
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: User,
          attributes: ["phone"], // Assuming 'phone_number' is in User model
        },
        {
          model: Pizza,
          attributes: ["name"],
          include: [
            {
              model: Topping, // Include the toppings in the pizza details
              attributes: ["name"],
            },
          ],
        },
      ],
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params; // order ID from the URL
    const { status } = req.body; // new status from the request body

    const validStatuses = ["Preparing", "Ready", "Delivered", "Canceled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status provided." });
    }

    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found." });
    }

    // Update the order status
    order.status = status;
    await order.save();

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrderStatus,
};

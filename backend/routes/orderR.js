const router = require("express").Router();
const { authenticate } = require("../middleware/authMiddleware");
const {
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controllers/controller.order/orderC");
router.post("/order",createOrder);
router.get("/order", authenticate, getOrders);
router.put("/order/:id", authenticate, updateOrderStatus);
module.exports = router;

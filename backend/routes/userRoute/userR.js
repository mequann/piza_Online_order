const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  deleteUser,
  loginUser,
} = require("../../controllers/controller.user/userC");
const { authenticate } = require("../../middleware/authMiddleware");

// User Routes
router.post("/users", createUser); // Create User (protected)
router.get("/users",authenticate, getAllUsers); // Get All Users (protected)
router.delete("/users/:id", authenticate, deleteUser); // Delete User (protected)
router.post("/login", loginUser); // User Login (unprotected)

module.exports = router;

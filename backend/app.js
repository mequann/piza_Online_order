require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db_config");
const models = require("./models/index");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
}));

app.use(bodyParser.json());
app.use(cookieParser());
// Import routes
const userRoutes = require("./routes/userRoute/userR");
const roleRoutes = require("./routes/roleR");
const restaurantRoutes = require("./routes/restaurantR");
const menuRoutes = require("./routes/menuR");
const orderRoutes=require('./routes/orderR')

// Register routes
app.use("/api", userRoutes);
app.use("/api", roleRoutes);
app.use("/api", restaurantRoutes);
app.use("/api", menuRoutes);
app.use("/api", orderRoutes);

// Sync the database
async function syncDatabase() {
  try {
    await sequelize.sync({ alter: true }); // alter sync if needed
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error occurred during model synchronization:", error);
  }
}

// syncDatabase();

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



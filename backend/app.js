require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db_config");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const User = require("./models/usermodel/usermodel");

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
const port = process.env.PORT || 5000;
// const routes=require("./route/routes");

// app.use("/api", routes);
async function syncDatabase() {
  try {
    await sequelize.sync({ alter: true , force: true}); //edit this as needed
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error occurred during model synchronization:", error);
  }
}

// syncDatabase();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  




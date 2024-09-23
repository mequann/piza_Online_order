// require('dotenv').config()
const express = require("express");
const cors = require("cors");

const config = require("./config/config");
const client = require("./config/db_config");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
const port = process.env.PORT || 5000;
// const routes=require("./route/routes");

// app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

require("dotenv").config();
// db.js (or any file you choose for database connection)

const { Client } = require("pg");

// Create a new client instance
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Connect to the database
client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Connection error", err.stack));

// Export the client for use in other modules
module.exports = client;

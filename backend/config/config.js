
// require("dotenv").config();
// // db.js (or any file you choose for database connection)

// const { Client } = require("pg");

// // Create a new client instance
// const client = new Client({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// // Connect to the database
// client
//   .connect()
//   .then(() => console.log("Connected to the database"))
//   .catch((err) => console.error("Connection error", err.message));

// Export the client for use in other modules
// module.exports = client;
// module.exports = {
//   development: {
//     dialect: process.env.DB_DIALECT,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     logging: true, // Enable logging for development
//   },
//   test: {
//     dialect: process.env.DB_DIALECT,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     logging: true, // Enable logging for test
//   },
//   production: {
//     dialect: process.env.DB_DIALECT,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     logging: false, // Disable logging in production
//   },
// };

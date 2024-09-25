require("dotenv").config();
const { Sequelize } = require("sequelize"); // Create Sequelize instance

const sequelize = new Sequelize(process.env.DATABASE_URL);

// Check if the connection is successful
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err.message);
//   });

// sequelize.sync().then(() => {
//   console.log(`Database & tables created!`);
// });

module.exports = sequelize;

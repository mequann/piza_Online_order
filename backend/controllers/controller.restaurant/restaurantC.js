
const bcrypt = require("bcrypt");

const Restaurant = require("../../models/restaurantmodel/restaurantM");
const Pizza = require("../../models/pizzamodel/pizzaM");
const User = require("../../models/userModel/usermodel");
const Role = require("../../models/roleModel/roleM");
const { sequelize } = require("../../config/db_config");

const addRestaurant = async (req, res) => {
  const transaction = await sequelize.transaction(); // Start a transaction
  try {
    const {
      full_name,
      address,
      description,
      email,
      password,
      restaurant_name,
      phone,
    } = req.body;

    let owner_id = null;

    // Check if user already exists
    const user = await User.findOne({ where: { email } });
    let newUser;

    if (!user) {
      // Check if the role exists or create it
      const [role] = await Role.findOrCreate({
        where: { name: "SUPER_ADMIN" },
        defaults: { name: "SUPER_ADMIN" },
      });

      // Hash password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      newUser = await User.create(
        {
          full_name,
          email,
          password: hashedPassword,
          role_id: role.id,
          address,
          phone,
        },
        { transaction }
      );
      owner_id = newUser.id;
    } else {
      owner_id = user.id;
    }

    // Check if the image is provided
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required." });
    }

    const image = req.file.filename;

    // Create restaurant
    const restaurant = await Restaurant.create(
      {
        restaurant_name,
        description,
        owner_id,
        image,
      },
      { transaction }
    );

    await transaction.commit(); // Commit the transaction

    res.status(201).json({
      data: restaurant,
      message: "Restaurant created successfully",
    });
  } catch (error) {
    await transaction.rollback(); // Rollback transaction in case of error
    res.status(500).json({ error: error.message });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addRestaurant,
  getAllRestaurants,
};

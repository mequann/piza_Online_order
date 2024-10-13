const bcrypt = require('bcryptjs');
const Restaurant = require('../../models/restaurantmodel/restaurantM');
const User = require('../../models/userModel/usermodel');
const Role = require('../../models/roleModel/roleM');
const { sequelize } = require('../../config/db_config');

const addRestaurant = async (req, res) => {
  let transaction;
  try {
    // Start a transaction
    transaction = await sequelize.transaction();

    const {
      full_name,
      address,
      description,
      email,
      password,
      restaurant_name,
      phone,
    } = req.body;

    // Validate required fields
    if (!full_name || !email || !password || !restaurant_name || !address || !phone) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    let owner_id = null;

    // Check if user already exists
    const user = await User.findOne({ where: { email } });
    let newUser;

    if (!user) {
      // Check if the role exists or create it
      const [role] = await Role.findOrCreate({
        where: { name: 'SUPER_ADMIN' },
        defaults: { name: 'SUPER_ADMIN' },
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

    // Ensure req.file is defined before accessing filename
    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required.' });
    }

    const image = req.file.filename; // Get the path to the uploaded image

    // Create the restaurant
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

    // Respond with the created restaurant data
    res.status(201).json({
      data: restaurant,
      message: 'Restaurant created successfully',
    });
  } catch (error) {
    if (transaction) await transaction.rollback(); // Rollback the transaction in case of an error
    console.error('Error creating restaurant:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Get all restaurants
const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json({ restaurants });
  } catch (error) {
    console.error('Error retrieving restaurants:', error.message);
    res.status(500).json({ message: 'Error retrieving restaurants', error: error.message });
  }
};

module.exports = { addRestaurant, getAllRestaurants };

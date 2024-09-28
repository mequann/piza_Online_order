const User = require("../../models/userModel/usermodel");
const Role = require("../../models/roleModel/roleM");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const defineAbilitiesFor = require("../../config/ability");

// Zod schema for user validation
const userSchema = z.object({
  full_name: z.string().min(1, "Full name is required").max(255),
  email: z.string().email("Invalid email").max(255),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  phone: z.string().optional(),
  role: z.string().min(1, "Role is required"), // Ensure role is validated as well
  // restaurant_id: z.string().uuid().optional(),
});

// Create User Controller
const createUser = async (req, res) => {
  try {
    const data = req.body;
    const parsedData = userSchema.parse(data);

    // Get the current user's abilities (if any)
    const user = req.user; // This may be undefined for public registration

    // Define abilities only if the user exists
    let ability;
    if (user) {
      ability = defineAbilitiesFor(user); // Assuming you have a function to define abilities
      // Check if the user has permission to create users
      if (ability.cannot("create", "User")) {
        return res
          .status(403)
          .json({ error: "You don't have permission to create users" });
      }
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(parsedData.password, 10);

    // Check the role and create it if it does not exist
    let [role] = await Role.findOrCreate({
      where: { name: parsedData.role },
    });

    // Create the user, including the role_id
    const newUser = await User.create({
      full_name: parsedData.full_name,
      email: parsedData.email,
      password: parsedData.password,
      phone: parsedData.phone,
      role_id: role.id,
    });

    res
      .status(201)
      .json({ message: "User created successfully.", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ error: error.message });
  }
};
// Get All Users Controller
const getAllUsers = async (req, res) => {
  try {
    const user = req.user; // Authenticated user from request
    console.log("Authenticated user:", user); // Log authenticated user details

    let ability;
    if (user) {
      ability = defineAbilitiesFor(user);
      console.log("User abilities:", ability); // Log the abilities

      // Check permissions
      if (ability.cannot("read", "User")) {
        return res
          .status(403)
          .json({ error: "You don't have permission to view users" });
      }
    }

    // Fetch all users from the database
    const users = await User.findAll();
    res.status(200).json(users); // Return the users as a response
  } catch (error) {
    console.error("Error fetching users:", error); // Log any errors
    res.status(500).json({ error: error.message });
  }
};

// Delete User Controller
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user; // Assuming user is authenticated and attached to the request
    const ability = defineAbilitiesFor(user);

    const userToDelete = await User.findByPk(id);

    // Check if user has permission to delete this specific user
    if (ability.cannot("delete", userToDelete)) {
      return res
        .status(403)
        .json({ error: "You don't have permission to delete this user" });
    }

    await User.destroy({ where: { id } });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login User Controller
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    // console.log(user,'lllllllllll')

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const role = await Role.findOne({ where: { id: user.role_id } });
    // Generate token
    const payload = {
      id: user.id,
      email: user.email,
      role: role.name,
      full_name: user.full_name,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return the token and successful response
    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  loginUser,
};

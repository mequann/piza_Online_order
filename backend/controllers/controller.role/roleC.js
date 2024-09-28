
const z = require("zod");
const { createRoles , getAllRoles} = require("../../models/association/association");

const roleSchema = z.object({
  name: z.string().min(1, "Name is required"),
  permission: z.array(z.string()).min(1, "At least one permission is required"), // Ensure permission is an array
});

// Controller function to create a role
const createRole = async (req, res) => {
  try {
    // Parse request body using Zod schema validation
    const parsedData = roleSchema.parse(req.body);
    
    // Call the createRoles function to create the role and associate permissions
    const role = await createRoles(parsedData);
    
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
const getAllRolesController = async (req, res) => {
  try {
    const roles = await getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createRole,
  getAllRolesController
};

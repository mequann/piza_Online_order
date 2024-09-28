const { AbilityBuilder,Ability } = require("@casl/ability");

// Define abilities based on user role
const defineAbilitiesFor = (user) => {
  const { can, cannot, build } = new AbilityBuilder(Ability);
  console.log(user, "user");

  // Ensure user is defined and has a role
  if (!user || !user.role) {
    throw new Error("User or role is undefined");
  }

  if (user.role === "SUPER_ADMIN") {
    can("manage", "all"); // SUPER_ADMIN can manage everything
  } else if (user.role === "RESTAURANT_MANAGER") {
    can("read", "User");
    can("manage", "User", { restaurant_id: user.restaurant_id }); // Can manage users in the same restaurant
  } else if (user.role === "KITCHEN_MANAGER") {
    can("read", "User", { restaurant_id: user.restaurant_id }); // Can only read users in the same restaurant
  } else if (user.role === "CUSTOMER") {
    can("read", "User", { id: user.id }); // Can only read their own profile
  } else {
    cannot("manage", "User"); // Default deny
  }

  return build();
};

module.exports = defineAbilitiesFor;

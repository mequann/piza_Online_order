import React, { useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Button, Box, Switch } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddRoleForm from "../Forms/AddRoleForm";

const RoleTable = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", createdAt: "2023-09-05", isActive: true },
    { id: 2, name: "User", createdAt: "2023-09-10", isActive: false },
    { id: 3, name: "Editor", createdAt: "2023-09-15", isActive: true },
  ]);

  const [open, setOpen] = useState(false); // State to control modal visibility

  // Toggle active/inactive state
  const handleToggleActive = (rowIndex) => {
    const updatedRoles = [...roles];
    updatedRoles[rowIndex].isActive = !updatedRoles[rowIndex].isActive;
    setRoles(updatedRoles);
  };

  // Delete role by index
  const handleDeleteRole = (rowIndex) => {
    const updatedRoles = roles.filter((_, index) => index !== rowIndex);
    setRoles(updatedRoles);
  };

  // Add new role
  const handleAddRole = (newRole) => {
    setRoles([...roles, { ...newRole, id: roles.length + 1, isActive: true }]);
  };

  // Open/close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { accessorKey: "name", header: "Role Name" },
    { accessorKey: "createdAt", header: "Created At" },
    {
      accessorKey: "isActive",
      header: "Status",
      Cell: ({ cell, row }) => (
        <Button
          variant="contained"
          sx={{
            backgroundColor: cell.getValue() ? "green" : "red",
            color: "white",
            borderRadius: "40px",
            padding: "0px 4px",
            fontSize: "0.8rem", // Adjust font size for smaller screens
            "&:hover": {
              backgroundColor: cell.getValue() ? "darkgreen" : "darkred",
            },
          }}
          onClick={() => handleToggleActive(row.index)}
        >
          <Switch
            checked={cell.getValue()}
            onClick={() => handleToggleActive(row.index)}
            color="default"
            sx={{
              pointerEvents: "none",
              "& .MuiSwitch-thumb": {
                width: 24,
                height: 24,
                backgroundColor: "white",
                borderRadius: "50%",
              },
              "& .MuiSwitch-track": {
                height: 10,
                backgroundColor: cell.getValue() ? "green" : "red",
              },
            }}
          />
          {cell.getValue() ? "Active" : "Inactive"}
        </Button>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      Cell: ({ row }) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDeleteRole(row.index)}
          sx={{ minWidth: "auto", padding: "6px", backgroundColor: "darkgray" }} // Minimize button size
        >
          <DeleteIcon fontSize="small" /> {/* Using trash icon */}
        </Button>
      ),
    },
  ];

  const table = useMaterialReactTable({
    data: roles,
    columns,
    enableRowSelection: false,
    renderTopToolbarCustomActions: () => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          ml: { xs: 0, sm: 2 }, // Remove left margin on small screens
          justifyContent: { xs: "center", sm: "flex-start" }, // Center on mobile
        }}
      >
        <Button
          variant="contained"
          onClick={handleOpen} // Open modal when Add Role button is clicked
          sx={{
            backgroundColor: "orange",
            py: { xs: 0.5, sm: 1 }, // Adjust padding for mobile
            fontSize: { xs: "0.8rem", sm: "1rem" }, // Adjust font size for mobile
            color: "white",
            "&:hover": { backgroundColor: "darkred" },
          }}
        >
          Add Role
        </Button>
      </Box>
    ),
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: { xs: 1, sm: 3 },
          width: "100%",
        }}
      >
        <MaterialReactTable
          table={table}
          sx={{
            width: "100%",
            maxWidth: "1800px",
            "& .MuiTableRow-root": { height: "40px" },
            "& .MuiTableCell-root": {
              padding: { xs: "6px", sm: "10px" },
              fontSize: { xs: "0.75rem", sm: "1rem" },
            },
          }}
        />
      </Box>

      {/* Modal for Adding a New Role */}
      <AddRoleForm
        open={open}
        handleClose={handleClose}
        handleAddRole={handleAddRole}
      />
    </>
  );
};

export default RoleTable;

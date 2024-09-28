const express = require('express');
const router = express.Router();
const { createRole , getAllRolesController} = require('../controllers/controller.role/roleC');

// Define the POST route for creating a role
router.post('/roles', createRole); 
router.get('/roles', getAllRolesController);

module.exports = router;

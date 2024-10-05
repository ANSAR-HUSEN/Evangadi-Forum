const express = require('express');

//Creating a router instance
const router = express.Router();

//Importing the user controller
const { registerUser } = require('../controller/userController');

//defining the routes
router.post('/register', registerUser);

module.exports = router;
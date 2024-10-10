const express = require('express');
//authentication middleware
const authMiddleware = require('../middleware/authMiddleware')
//Creating a router instance
const router = express.Router();

//Importing the user controller
const {
  registerUser,
  login,
  checkUser,
} = require("../controller/userController");


router.post('/register', registerUser);


router.post("/login", login);


router.get("/check", authMiddleware, checkUser);

module.exports = router;

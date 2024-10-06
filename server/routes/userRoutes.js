const express = require("express");
const router = express.Router();

//authentication middleware
const authMiddleware = require("../middleware/authMiddleware");

//import user controller functions from userController component

const {
   registerUser,
   login,
   checkUser,
} = require("../controller/userController");

//register routes

//register, login and checkUser are functions and are defined in the controller component
router.post("/register", registerUser);

//login user
router.post("/login", login);

//check user
router.get("/check", authMiddleware, checkUser);

module.exports = router;

//enter place
//api endpoint
const express = require("express");
// const {register, login, checkUser} = require("../controller/userController");
// const { register } = require('module');
const router = express.Router();

//authonthication middleware
const authMiddleware = require("../middleware/authMiddleware");

// // App.post("api/users/login",(req,res)=>{
// //     res.send("login");
// // })

//user controllers
const { register, login, checkUser } = require("../controller/userController");

// //register route
// router.post("/register",(req, res)=>{
//     res.send("register user")
// })
router.post("/register", register);

// //login user(for email and password)
// router.post("/login", (req, res) => {
//   res.send("login user");
// });//it's send data of email and password
router.post("/login", login);

// //check user (route)
// router.get("/check", (req, res) => {
//   res.send("check user");
// });

router.get("/check", authMiddleware, checkUser);

module.exports = router;

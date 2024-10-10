const dbConnection = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes"); //https status codes
const jwt = require("jsonwebtoken"); //for web tokens
const dotenv = require('dotenv');
dotenv.config()

// Register a new user
async function registerUser(req, res) {
   const { username, firstname, lastname, email, password } = req.body;

   // check fiels are not empty
   if (!username || !firstname || !lastname || !email || !password) {
      return res
         .status(400)
         .json({ message: "Please provide all required fields" });
   }

   try {
      // check if user already exists
      const [user] = await dbConnection.query(
         "SELECT username, email FROM users WHERE username =? OR email =?",
         [username, email]
      );
      if (user.length > 0) {
         return res.status(409).json({
            error: "Conflict",
            message: "User already existed",
         });
      }

      //check if password is at least 8 characters long
      if (password.length < 8) {
         return res.status(400).json({
            error: "Bad Request",
            message: "Password must be at least 8 characters long",
         });
      }

      // generate hash of password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert user into database
      await dbConnection.query(
         "INSERT INTO users (username, firstname, lastname, email, password) VALUES (?,?,?,?,?)",
         [username, firstname, lastname, email, hashedPassword]
      );
      return res.status(201).json({
         message: "User registered successfully",
      });
   } catch (error) {
      console.error("Error while registering user: ", error);
      return res.status(500).json({
         error: "Internal Server Error",
         message: "Something went wrong",
      });
   }
}

//Login section
async function login(req, res) {
   const { email, password } = req.body;
   if (!email || !password) {
      return res
         .status(StatusCodes.BAD_REQUEST)
         .json({ msg: "Please enter all required fields" });
   }
   try {
      const [user] = await dbConnection.query(
         "SELECT username,userid, password from users WHERE email=?",
         [email]
      );
      //return username, userid and password, if user exists
      //return res.json({user: user})
      if (user.length == 0) {
         return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: "Invalid credentials" });
      }

      //compare or validate if password entered matches

      const isMatch = await bcrypt.compare(password, user[0].password);
      if (!isMatch) {
         return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: "Invalid credentials" });
      }

      const username = user[0].username;
      const userid = user[0].userid;
      const token = jwt.sign({ username, userid }, process.env.JWT_SECRET, {
         expiresIn: "1d",
      }); //username and userid are used to sign the token, token validity set to 1 day

      return res
         .status(StatusCodes.OK)
         .json({ msg: "user login successfully", token });
      //return user if password matches
      //return res.json({ user: user[0].password})
   } catch (error) {
      console.log(error.message);
      return res
         .status(StatusCodes.INTERNAL_SERVER_ERROR)
         .json({ msg: "Something went wrong, please try again later" });
   }
}

async function checkUser(req, res) {
   const username = req.user.username;
   const userid = req.user.userid;
   res.status(StatusCodes.OK).json({ msg: "Valid user", username, userid });
   //res.send("check user");
}

//these functions need to be exported to be used by useRouter
//functions are exported as an object using {}
module.exports = { registerUser, login, checkUser };

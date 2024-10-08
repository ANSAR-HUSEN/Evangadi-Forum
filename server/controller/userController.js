const dbConnection = require('../db/dbConfig')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

// Register a new user
async function registerUser(req, res) {
  const { username, firstname, lastname, email, password } = req.body;

  // check fields are not empty
  if (!username || !firstname || !lastname || !email || !password) {
    return res.status(400).json({  "message": "Please provide all required fields" });
  }

  try {
    // check if user already exists
    const [user] = await dbConnection.query('SELECT username, email FROM users WHERE username =? OR email =?', [username, email])
    if (user.length > 0) {
      return res.status(409).json({
        error: "Conflict",
        message: "User already exists",
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
    await dbConnection.query('INSERT INTO users (username, firstname, lastname, email, password) VALUES (?,?,?,?,?)', [username, firstname, lastname, email, hashedPassword]);
    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error('Error while registering user: ', error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "Something went wrong",
    });
  }
}

//logging in existing user
async function login(req, res){
  const {email, password} = req.body;

  if (!email || !password){
    return res.status(400).json({message: "Please enter all required fields"});
  }
  try{
    const [user] = await dbConnection.query("SELECT username, userid, password FROM users WHERE email = ?", [email])
    if(user.length === 0){
      return res.status(400).json({message: "Invalid credential"});
    }
     //compare password 
     const isMatch = await bcrypt.compare(password, user[0].password);
     if (!isMatch) {
       return res.status(401).json({ message: "Invalid credentials" });
     }

     const username = user[0].username
     const userid = user[0].userid
     const token = jwt.sign({ username, userid }, process.env.JWT_SECRET, {
       expiresIn: "1d",
     });

     
     return res.status(200).json({message:"user logged in successfully", token})

  }catch (error){
    console.log(error.message)
    return res.status(500).json({message: "Something went wrong, try again later!"})
  }
}

//verifies user validity 
async function checkUser(req, res){
  const username = req.user.username
  const userid = req.user.userid

res.status(201).json({message: "valid user", username, userid})
res.send("check user")

}
module.exports = {
  registerUser,
  login,
  checkUser,
};

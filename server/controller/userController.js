const dbConnection = require('../db/dbConfig')
const bcrypt = require('bcrypt')

const dotenv = require('dotenv');
dotenv.config()

// Register a new user
async function registerUser(req, res) {
  const { username, firstname, lastname, email, password } = req.body;

  // check fiels are not empty
  if (!username || !firstname || !lastname || !email || !password) {
    return res.status(400).json({  "message": "Please provide all required fields" });
  }

  try {
    // check if user already exists
    const [user] = await dbConnection.query('SELECT username, email FROM users WHERE username =? OR email =?', [username, email])
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

module.exports = {
  registerUser,
}

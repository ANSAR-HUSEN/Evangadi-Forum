//db connection
const dbConnection = require("../db/dbConfig");

async function register(req, res) {
  const { user_name, first_name, last_name, email, password } = req.body;
  if (!email || !password || !first_name || !last_name || !user_name) {
    return res
      .status(400)
      .json({ message: "Please enter the required information!" });
  }
  try {
    // to check for existing user
//     const [user] = await dbConnection.query(
//       "SELECT user_name, email FROM users WHERE user_name =? or email =?",
//       [user_name, email]
//     );
//     // if (user.length > 0){
//     //   return res.status(400).json({ message: "User already exists!" });
//     // }
// const existingUser = user.length > 0
//     if (existingUser) {
//       return res.status(409).json({ message: "User already exists!" });
//     }
//     return res.json({ user: user });

    // Insert user into database
    await mysqlConnection.query(
      "INSERT INTO USERS (user_name, first_name, last_name, email, password) VALUES (?,?,?,?,?)",
      [user_name, first_name, last_name, email, password]
    );
    return res.status(201).json({
      message: "User created!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong!" });
  }
}

async function login(req, res) {
  res.send("Log in!");
}

async function checkUser(req, res) {
  res.send("Check user!");
}

module.exports = { register, login, checkUser };

const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Authentication invalid" });
  }
  // Extract the token from the header
  const token = authHeader.split(" ")[1];
console.log(token);
  try {

    const { username, userid } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { username, userid };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication is invalid" });
  }
};

module.exports = authMiddleware;

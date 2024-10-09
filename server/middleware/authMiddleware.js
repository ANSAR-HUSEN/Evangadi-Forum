const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
// async function authMiddleware (req,res,next) {

//     const authHeader = req.headers.authorization
//     //validate token exists
//     if(!authHeader || !authHeader.startsWith('Bearer')) {
//         return res
//            .status(StatusCodes.UNAUTHORIZED)
//            .json({ msg: "Authentication failed" });
//     }
//     const token = authHeader.split(' ')[1]
//     console.log(authHeader);
//     console.log(token);

//     try {
//         const { username, userid } = jwt.verify(token, process.env.JWT_SECRET);

//        // return res.status(StatusCodes.OK).json({data})//valid token passed
//        req.user = { username, userid } //req.user is a custom property and will pass to next()

//        next() //next is called once authentication is successfull

//     } catch (error) {
//         return res
//            .status(StatusCodes.UNAUTHORIZED)
//            .json({ msg: "Authentication failed" });
//     }

// }

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token || !token.startsWith("Bearer")) {
    return res.status(401).json({
      error: "Unauthorized",
      message: "Authentication invalid",
    });
      
      const tokenString = token.split(' ')[1]
      
      try {
        jwt.verify(tokenString,)
      } catch (error) {
        
      }
  }
}
module.exports = authMiddleware;

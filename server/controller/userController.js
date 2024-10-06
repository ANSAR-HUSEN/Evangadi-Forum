//db connection
const dbConnection = require("../db/dbConfig");

const bcrypt = require("bcrypt");
const { StatusCodes} = require('http-status-codes') //https status codes 
const jwt = require('jsonwebtoken')//for web tokens 

async function register(req, res) {
   const { username, firstname, lastname, email, password } = req.body;

   if (!email || !password || !firstname || !lastname || !username) {
      return res
         .status(StatusCodes.BAD_REQUEST)
         .json({ msg: "Please provide all required information" });
   }
   try {
      //check if user exists

      const [user] = await dbConnection.query(
         "SELECT username,userid from user WHERE username=? OR email=?",
         [username, email]
      );
      // return res.json({user: user})

      if (user.length > 0) {
         return res.status(StatusCodes.BAD_REQUEST).json({
            msg: "User is already registered",
         });
      }
      //validate password length

      if (password.length <= 8) {
         return res.status(StatusCodes.BAD_REQUEST).json({
            msg: "Password must be at least 8 characters",
         });
      }

      //encrypt the password
      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(password, salt);
      //hashed password is fowarded to the db

      //resgister user if accoundt doesn't exist ---> enter user data into the user table
      await dbConnection.query(
         "INSERT INTO user (username, firstname, lastname, email, password) VALUES (?,?,?,?,?) ",
         [username, firstname, lastname, email, hashedPassword]
      );

      return res.status(StatusCodes.CREATED).json({ msg: "User created" });
   } catch (error) {
      console.log(error.message);
      return res
         .status(StatusCodes.INTERNAL_SERVER_ERROR)
         .json({ msg: "Something went wrong, please try again later" });
   }
}
//Login section 
async function login(req, res) {
   const { email, password} = req.body;
   if(!email || !password) {

    return res.status(StatusCodes.BAD_REQUEST).json({msg: "Please enter all required fields"})
   }
   try {

    
      const [user] = await dbConnection.query(
         "SELECT username,userid, password from user WHERE email=?",
         [email])
         //return username, userid and password, if user exists 
         //return res.json({user: user})
        if(user.length==0) {

        return res
           .status(StatusCodes.BAD_REQUEST)
           .json({ msg: "Invalid credentials" });

        }

     //compare or validate if password entered matches 

     const isMatch = await bcrypt.compare(password, user[0].password);
     if(!isMatch) {

        return res
           .status(StatusCodes.BAD_REQUEST)
           .json({ msg: "Invalid credentials" });
     }

     const username = user[0].username;
     const userid = user[0].userid;
    const token =  jwt.sign({username, userid}, "secret", {expiresIn: "1d"}) //username and userid are used to sign the token, token validity set to 1 day

    return res.status(StatusCodes.OK).json({msg: "user login successfully", token })
     //return user if password matches 
     //return res.json({ user: user[0].password})


    
   } catch {
      console.log(error.message);
      return res
         .status(StatusCodes.INTERNAL_SERVER_ERROR)
         .json({ msg: "Something went wrong, please try again later" });
   }

}

async function checkUser(req, res) {
    const username = req.user.username;
    const userid = req.user.userid;
    res.status(StatusCodes.OK).json({msg:"Valid user", username, userid })
   //res.send("check user");
   

}

//these functions need to be exported to be used by useRouter
//functions are exported as an object using {}
module.exports = { register, login, checkUser };

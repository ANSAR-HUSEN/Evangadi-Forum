
// DB connection
const dbConnection = require("../db/dbConfig");

async function postQuestion(req, res) {
  try {
    const { title, description, tag } = req.body;
    // const user_id = 

    // Check for missing items
    if (!title || !description || !tag) {
      return res
        .status(401)
        .json({ message: "Please enter title, description, and tag!" });
    }

    // Insert question into database
    await dbConnection.query(
      "INSERT INTO QUESTIONS (user_id, title, description, tag) VALUES (?,?,?,?)",
      [user_id, title, description, tag]
    );

    return res
      .status(201)
      .json({ message: "Question asked successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong!" });
  }
}


module.exports = { postQuestion};


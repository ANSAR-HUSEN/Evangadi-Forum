const dbConnection = require("../db/dbConfig");
const crypto = require("crypto");

async function postQuestion(req, res) {
  const { title, description, tag } = req.body;

  // Check for missing items
  if (!title || !description) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Please provide all required fields!",
    });
  }

  try {
    // get userid from user
    const { userid } = req.user;

    // get a unique identifier for questionid so two questions do not end up having the same id. crypto built in node module.
    const questionid = crypto.randomBytes(16).toString("hex");

    // Insert question into database
    await dbConnection.query(
      "INSERT INTO questions ( userid, questionid, title, description, tag, created_at) VALUES (?,?,?,?,?,?)",
      [
        userid,
        questionid,
        title,
        description,
        tag,
        new Date() || null
      ]
    );

    return res.status(201).json({ message: "Question created successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
}

async function getAllQuestion(req, res) {
  try {
    // GEt all questions from the database
    const [questions] = await dbConnection.execute(
      "SELECT q.*, u.username FROM questions q JOIN users u ON q.userid = u.userid"
    );
    //check if the questions array is empty
    if (questions.length === 0) {
      return res.status(400).json({ message: "No questions fround." });
    }

    return res.json(questions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch questions" });
  }
}

module.exports = { postQuestion, getAllQuestion };

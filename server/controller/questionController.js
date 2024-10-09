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
const dbConnection = require("../db/dbConfig.js");
const { StatusCodes } = require("http-status-codes");

// const questionController = require("../controller/QuestionController");

// Controller to get a single question by ID
async function getSingleQuestion(req, res) {
  const { question_id } = req.params;

  try {
    // Validate question_id is a number
    if (isNaN(question_id)) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Invalid question ID" });
    }

    // Query the database to get the question details
    const [question] = await dbConnection.query(
      "SELECT * FROM questions WHERE question_id = ?",
      [question_id]
    );

    // If no question found, return 404
    if (question.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Question not found" });
    }

    // Return the question details
    return res.status(StatusCodes.OK).json({ question: question[0] });
  } catch (error) {
    console.error(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "An unexpected error occurred" });
  }
}

module.exports = getSingleQuestion;

//

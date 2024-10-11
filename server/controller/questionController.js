const dbConnection = require("../db/dbConfig");
const crypto = require("crypto");
const { StatusCodes } = require("http-status-codes");
const KeywordExtractor = require("keyword-extractor");

const generateTag = (title) => {
  const extractionResult = KeywordExtractor.extract(title, {
    language: "english",
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: true,
  });
  return extractionResult.length > 0 ? extractionResult[0] : "general";
};

async function postQuestion(req, res) {
  const { title, description } = req.body;

  // Check for missing items
  if (!title || !description) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: "Please provide all required fields!",
    });
  }

  try {
    // get userid from user
    const { userid } = req.user;

    // get a unique identifier for questionid so two questions do not end up having the same id. crypto built in node module.
    const questionid = crypto.randomBytes(16).toString("hex");

    const tag = generateTag(title);

    // Insert question into database
    await dbConnection.query(
      "INSERT INTO questions ( userid, questionid, title, description, tag, created_at) VALUES (?,?,?,?,?,?)",
      [userid, questionid, title, description, tag, new Date()]
    );

    return res.status(201).json({
      message: "Question created successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "An unexpected error occurred.",
    });
  }
}

async function getAllQuestion(req, res) {
  try {
    // GEt all questions from the database
    const [questions] = await dbConnection.execute(
      "SELECT q.*,u.username FROM questions q JOIN users u ON q.userid = u.userid ORDER BY created_at DESC"
    );
    //check if the questions array is empty
    if (questions.length === 0) {
      return res.status(404).json({ message: "No questions fround." });
    }

    return res.status(StatusCodes.OK).json(questions);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An unexpected error occurred", error: error });
  }
}

// Controller to get a single question by ID
async function getSingleQuestion(req, res) {
  const { question_id } = req.params;
  console.log(question_id);

  if (!question_id) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Invalid question ID" });
  }

  try {
    // Query the database to get the question details
    const [question] = await dbConnection.execute(
      "SELECT * FROM questions WHERE questionid = ?",
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

module.exports = { postQuestion, getAllQuestion, getSingleQuestion };

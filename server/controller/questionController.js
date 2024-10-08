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

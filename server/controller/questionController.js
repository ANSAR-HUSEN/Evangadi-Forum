//db connection
const dbConnection = require("../db/dbConfig");
const { statusCodes } = require("http-status-codes");
// Get all questions
async function getAllQuestions(req, res) {

  try {
    // Query to fetch all questions from the database
    const [questions] = await dbConnection.execute(
      "SELECT q.*, u.username FROM questions q JOIN users u ON q.userid = u.userid"
    );

    // Check if the questions array is empty
    if (questions.length === 0) {
      // Return a 404 error if no questions are found
      // If empty, send a 404 response
      return res.status(404).json({
        error: "Not Found", // Error type
        message: "No questions found.", // Error message
      });
    }
    return res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
}
module.exports = { getAllQuestions };
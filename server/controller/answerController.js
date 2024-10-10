const dbConnection = require("../db/dbConfig");
const { StatusCodes } = require("http-status-codes"); //https status codes

// Get answers by question id

async function getAnswersByQuestionId(req, res) {
  // Get question id from the request parameters
  const  questionId  = req.params.question_id;
  

  // console.log("questionId:", questionId)

  // Check if question id is present in the request parameters
  if (!questionId) {
    return res.status(400).json({ error: "Question id is required" });
  }

  // Query to get answers by question id
  try {
    // Get answers by question id by using parameterized query to prevent SQL injection attacks
    const [answers] = await dbConnection.execute(
      "SELECT a.answerid AS answer_id, a.answer AS content, u.username AS user_name, a.created_at AS created_at FROM answers a JOIN users u ON a.userid = u.userid WHERE a.questionid =?",
      [questionId]
    );

    // console.log(answers)

    // Check if there are any answers for the given question id
    if (answers.length === 0) {
      return res.status(404).json({
        error: "Not Found",
        message: "The requested question could not be found.",
      });
    }

    // Return the answers
    return res.status(200).json({ answers });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
}


const postAnswerForQuestion = async (req, res) => {
  const { questionid, answer } = req.body;

  console.log("Question ID:", questionid);
  console.log("Answer:", answer);

  if (!questionid || !answer) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Please provide both question ID and answer.",
    });
  }

  try {
    const createdBy = req.user.userid;

    await dbConnection.execute(
      "INSERT INTO answers (questionid, userid, answer) VALUES (?, ?, ?)",
      [questionid, createdBy, answer]
    );

    return res.status(201).json({ message: "Answer posted successfully" });
  } catch (error) {
    console.error("Error posting answer:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
};



// Exporting the functions
module.exports = {
  getAnswersByQuestionId,
  postAnswerForQuestion,
};

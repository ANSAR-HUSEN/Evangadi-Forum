//db connection
const dbConnection = require("../db/dbConfig");
const { statusCodes } = require("http-status-codes");
// Get all questions
async function getAllQuestions(req, res) {
  
  try {
   
    // Check if the questions array is empty
    if (questions.length === 0) {
      // Return a 404 error if no questions are found
      // If empty, send a 404 response
      return res.status(statusCodes.BAD_REQUEST).json({
        error: "Not Found", // Error type
        message: "No questions found.", // Error message
      });
    }

    const [questions] = await dbConnection.query("SELECT * FROM questions");
    return res.status(statusCodes.OK).json(questions);
  } catch (error) {
    console.error(error);
    return res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({
        error: "Internal Server Error",
        message: "An unexpected error occurred."
      });
  }

}
modules.exports = getAllQuestions;








// async function getAllQuestions(req, res) {
//   try {
//     // Query to fetch all questions from the database
//     const [questions] = await dbConnection.execute(
//       "SELECT q.questionid AS question_id, q.title, q.content, u.username AS user_name, q.created_at AS created_at FROM questions q JOIN users u ON q.userid = u.userid"
//     );//q means questions and u means users

//     // Check if there are any questions
//     // Check if the questions array is empty
//     if (questions.length === 0) {
//       // Return a 404 error if no questions are found
//       // If empty, send a 404 response
//       return res.statusCodes.BAD_REQUEST.json({
//         error: "Not Found", // Error type
//         message: "No questions found.", // Error message
//       });
//     }
//     // Return the list of questions with a 200 status code
//     // Successful response with a list of questions(question added successfully )
//     return res.statusCodes.CREATED.json({ questions }); // Error message
//   } catch (error) {
//     console.log(error); // Log errors for debugging

//     // Return a 500 error for unexpected issues
//     return res.statusCodes.INTERNAL_SERVER_ERROR.json({
//       error: "Internal Server Error",
//       message: "An unexpected error occurred.",
//     }); // Send a 500 Internal Server Error response(database connection error)
//   }
// }
// // Export the function for use in routes
// module.exports = getAllQuestions;
// // module.exports = {
// //   getAllQuestions,
// // };
















// // ////////////***************** */

// // // const express = require("express"); // Import the Express framework
// // // const app = express(); // Initialize an Express application
// // // const PORT = process.env.PORT || 3000; // Set the PORT for the server, defaulting to 3000


// // // Sample data - In a real application, this data would come from a database.
// // let questions = [
// //   // Array containing question objects
// //   {
// //     question_id: 1,
// //     title: "First Question", // Title of the first question
// //     content: "This is the first question.", // Content of the first question
// //     user_name: "Sisay", // User who asked the first question
// //     created_at: "2023-06-30T12:00:00Z", // Creation date of the first question
// //   },
// //   {
// //     question_id: 2,
// //     title: "Second Question", // Title of the second question
// //     content: "This is the second question.", // Content of the second question
// //     user_name: "Sara", // User who asked the second question
// //     created_at: "2023-06-30T13:00:00Z", // Creation date of the second question
// //   },
// // ];

// // // Endpoint to get all questions
// // app.get("/api/question", (req, res) => {
// //   // Define a GET route for '/api/question'
// //   if (questions.length === 0) {
// //     // Check if the questions array is empty
// //     return res.status(404).json({
// //       // If empty, send a 404 response
// //       error: "Not Found", // Error type
// //       message: "No questions found.", // Error message
// //     });
// //   }

// //   // Successful response with a list of questions
// //   res.status(200).json({ questions }); // Error message
// // });

// // // Error handling middleware
// // app.use((err, req, res, next) => {
// //   // Middleware to handle errors
// //   console.error(err.stack); // Log the error stack to the console
// //   res.status(500).json({
// //     // Send a 500 Internal Server Error response
// //     error: "Internal Server Error", // Error type
// //     message: "An unexpected error occurred.", // Error message
// //   });
// // });

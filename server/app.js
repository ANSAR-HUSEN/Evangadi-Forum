const express = require("express");
const app = express();

<<<<<<< HEAD
=======
const cors = require('cors');
const PORT = process.env.PORT || 5501;

>>>>>>> main
const cors = require("cors");
app.use(cors());

// Connect to database
const dbConnection = require("./db/dbConfig");

// Middleware to parse JSON request body
app.use(express.json());

// User Routes middleware file
<<<<<<< HEAD
=======
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Question Routes middleware file
const questionsRoutes = require("./routes/questionRoutes");
app.use("/api", questionsRoutes);

// Answer Routes middleware file
const answerRoutes = require('./routes/answerRoutes');
app.use("/api", answerRoutes);

>>>>>>> main
const userRoutes = require("./routes/userRoutes");

// Question Routes middleware file
const questionRoutes = require("./routes/questionRoutes");

// Answer Routes middleware file
const answerRoutes = require("./routes/answerRoutes");

// user rotes middleware
app.use("/api/users", userRoutes);

// Use question routes
<<<<<<< HEAD
app.use("/api", questionRoutes);

// Use answer routes
app.use("/api", answerRoutes);
app.use("/", (req, res)=>{
  return res.send("hello");
})
=======

// Use answer routes
app.use("/api", answerRoutes);
>>>>>>> main

// Start server
async function start() {
  try {
    // Checking database connection
    await dbConnection.execute("SELECT 1"); // Simple query to ensure DB connection
    console.log("Database connection established");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
}

// Start the server
start();

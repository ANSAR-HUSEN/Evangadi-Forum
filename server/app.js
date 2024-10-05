const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;

const cors = require('cors');
app.use(cors());

// Connect to database
const dbConnection = require('./db/dbConfig');

// Middleware to parse JSON request body
app.use(express.json());


// User Routes middleware file
const userRoutes = require('./routes/userRoutes');


// Question Routes middleware file


// Answer Routes middleware file



// user rotes middleware
app.use('/api/users', userRoutes);

// Use question routes


// Use answer routes



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
start()
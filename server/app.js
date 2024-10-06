const express = require("express");
// const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require("./db/dbConfig");

//middleware to parse JSON requests
app.use(express.json());

//user routes middleware file
const userRoutes = require("./routes/userRoute");

//user routes middleware
app.use("/api/users", userRoutes);

//questions routes middleware
const questionsRoutes = require("./routes/questionRoute");
app.use("/api/question", questionsRoutes);

async function start() {
  try {
    //to start database connection
    const result = await dbConnection.execute("SELECT'test'");
    console.log("database connection is established");

    //to start the server after the db is connected
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
    // app.listen(port);
    // console.log(`Listening on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();

//answers routes middleware

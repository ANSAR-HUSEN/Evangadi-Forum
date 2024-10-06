//import mysql driver
const mysql = require("mysql2");

//import express
const express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());
const PORT = 5500;

//import db connection

const dbConnection = require("./db/dbConfig");

//user routes middleware file
const userRoutes = require("./routes/userRoutes");

//express middleware to extract json data
app.use(express.json());

//user routes middleware
app.use("/api/user", userRoutes);

const bodyparser = require("body-parser");

//question routes middleware ??

//answer routes middleware ??

async function start() {
   try {
      const result = await dbConnection.execute("select  'test' ");

      await app.listen(PORT);
      console.log("database connection esablished");
      console.log(`Listening on ${PORT}`);

      console.log(result);
   } catch (error) {
      console.log(error.message);
   }
}
start();

//setting up mysql connection

// const dbConnection = mysql.createConnection({
//    host: "localhost",
//    user: "myDBuser",
//    password: "8497",
//    database: "evangadi_forum",
//    port: 3306,
// });

// Connect to the database
// dbConnection.connect((err) => {
//    if (err) {
//       console.error("Error connecting to evangadi_forum: ", err);
//    } else {
//       console.log("Connected to evangadi_forum database.");
//    }
// });

// app.get("/install", (req, res) => {
//    let message = "Tables Created";
//    //Registration Table

//    let createTableUser = `CREATE TABLE if not exists User(
//     userid INT(20) NOT NULL AUTO_INCREMENT,
//     username VARCHAR(20) NOT NULL,
//     firstname VARCHAR(20) NOT NULL,
//     lastname VARCHAR(20) NOT NULL,
//     email VARCHAR(40) NOT NULL,
//     password VARCHAR(100) NOT NULL,
//     PRIMARY KEY (userid)

// )`;
//    //Question Table
//    let createTableQuestion = `CREATE TABLE if not exists Question(
//     id INT(20) NOT NULL AUTO_INCREMENT,
//     questionid VARCHAR(100) NOT NULL UNIQUE,
//     userid INT(20) NOT NULL,
//     title VARCHAR(50) NOT NULL,
//     description VARCHAR(200) NOT NULL,
//     tag VARCHAR(20),
//     PRIMARY KEY (id, questionid),
//     FOREIGN KEY (userid) REFERENCES User(userid)

//   )`;

//    //Answer Table

//    let createTableAnswer = `CREATE TABLE if not exists Answer(
//     answerid INT NOT NULL AUTO_INCREMENT ,
//     userid INT(20) NOT NULL,
//     questionid VARCHAR(100) NOT NULL,
//     answer VARCHAR(200) NOT NULL,
//     PRIMARY KEY (answerid),
//     FOREIGN KEY (questionid) REFERENCES question(questionid),
//     FOREIGN KEY (userid) REFERENCES user(userid)

// )`;

//    // Execute SQL statements
//    dbConnection.query(createTableUser, (err, result) => {
//       if (err) throw err;
//       console.log("User table created.");
//    });

//    dbConnection.query(createTableQuestion, (err, result) => {
//       if (err) throw err;
//       console.log("Question table created.");
//    });

//    dbConnection.query(createTableAnswer, (err, result) => {
//       if (err) throw err;
//       console.log("Answer table created.");
//    });

//    res.send(message);
// });

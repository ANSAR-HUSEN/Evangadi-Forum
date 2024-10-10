const mysql2 = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// Create the connection pool
const dbConnection = mysql2.createPool({
  user: process.env.DB_USER,
  database: process.env.MYSQL_DB,
  port: process.env.DB_PORT || 3306,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  connectionLimit: 10,
});

// // Test the connection (optional but useful)
// dbConnection.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error connecting to the database:", err.message);
//   } else {
//     console.log("Database connected successfully!");
//     connection.release(); // Release the connection back to the pool
//   }
// });

module.exports = dbConnection.promise(); // Use promises to make queries async/await friendly

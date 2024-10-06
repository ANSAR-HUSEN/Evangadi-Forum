const mysql = require("mysql2");
const dotenv = require("dotenv")

dotenv.config()
//Creating connection to the database
const dbConnection = mysql.createPool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
});

// mysqlConnection.execute("select 'test' ", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });
module.exports = dbConnection.promise();
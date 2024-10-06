//import mysql driver
const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
   host: "localhost",
   user: "myDBuser",
   password: "8497",
   database: "evangadi_forum",
   port: 3306,
});

// dbConnection.execute("select 'test' ", (err, result) => {
//    if (err) {
//       console.log(err.message);
//    } else {
//       console.log(result);
//    }
// });

module.exports=dbConnection.promise()
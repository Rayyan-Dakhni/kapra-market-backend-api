require("dotenv").config();
const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

if (con) {
  console.log("Connection Successful");
} else {
  console.log("Connection Unsuccessful");
}

module.exports = con;

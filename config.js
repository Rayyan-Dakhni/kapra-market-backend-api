const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kapra_market_db",
});

if (con) {
  console.log("Connection Successful");
} else {
  console.log("Connection Unsuccessful");
}

module.exports = con;

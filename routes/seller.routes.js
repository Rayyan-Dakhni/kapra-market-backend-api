const app = require("express").Router();

const con = require("../config");

app.get("/", (req, res) => {
  con.query("SELECT * FROM sellers", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = app;

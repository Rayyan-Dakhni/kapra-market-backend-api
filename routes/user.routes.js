const app = require("express").Router();
const con = require("../config");

// checked and working fine
app.get("/", (req, res) => {
  con.query("SELECT * FROM users", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

// checked and working fine
app.post("/addNewUser", (req, res) => {
  const user_email = req.body.user_email;
  const user_password = req.body.user_password;

  con.query(
    `INSERT INTO users(user_email, user_password) VALUES('${user_email}', '${user_password}')`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

// checked and working fine
app.get("/getUserById/:id", (req, res) => {
  const user_id = req.params.id;

  con.query(
    `SELECT * FROM users WHERE user_id='${user_id}'`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

app.post("/updateUserById/:id", (req, res) => {
  const user_id = req.params.id;
  const user_password = req.body.user_password;

  console.log(user_password);

  `UPDATE users SET user_password = '${user_password}' WHERE user_id = ${user_id}`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    };
});

module.exports = app;

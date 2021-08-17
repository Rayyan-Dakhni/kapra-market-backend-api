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
  const user_type = req.body.user_type;

  con.query(
    `INSERT INTO users(user_email, user_password, user_type) VALUES('${user_email}', '${user_password}', '${user_type}')`,
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

// checked and working fine
app.post("/getUserByEmail/:email", (req, res) => {
  const user_email = req.params.email;

  con.query(
    `SELECT * FROM users WHERE user_email = '${user_email}'`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

// checked and working fine
app.post("/updateUserById/:id", (req, res) => {
  const user_id = req.params.id;
  const user_password = req.body.user_password;

  con.query(
    `UPDATE users SET user_password = '${user_password}' WHERE user_id = ${user_id}`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

// user details routes

// checked and working fine
app.get("/details/", (req, res) => {
  con.query("SELECT * FROM user_details", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

// checked and working fine
app.post("/details/addNewDetails", (req, res) => {
  const user_id = req.body.user_id;
  const full_name = req.body.full_name;
  const gender = req.body.gender;
  const address = req.body.address;
  const mobile_no = req.body.mobile_no;
  const cnic_no = req.body.cnic_no;

  con.query(
    `INSERT INTO user_details(user_id, full_name, gender, address, mobile_no, cnic_no) VALUES('${user_id}', '${full_name}', '${gender}', '${address}', '${mobile_no}', '${cnic_no}')`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

app.post("/details/getDetailsById/:id", (req, res) => {
  const user_id = req.params.id;

  con.query(
    `SELECT * FROM user_details WHERE user_id = ${user_id}`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

module.exports = app;

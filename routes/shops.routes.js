const con = require("../config");

const app = require("express").Router();

app.get("/", (req, res) => {
  con.query("SELECT * FROM shops", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/addNewShop", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const profile_image = req.body.profile_image;
  const cover_image = req.body.cover_image;

  const files = req.file;

  console.log(file);

  con.query(
    `INSERT INTO shops(name, description, profile_image, cover_image) VALUES('${name}', '${description}')`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

app.post("/updateShop/:id", (req, res) => {
  const name = req.body.name;

  console.log(name);
});

module.exports = app;

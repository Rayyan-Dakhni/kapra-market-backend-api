const con = require("../config");

const app = require("express").Router();

app.get("/", (req, res) => {
  con.query("SELECT * FROM categories", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/addNewCategory", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const image = req.body.image;

  con.query(
    `INSERT INTO categories(name, description, image) VALUES('${name}', '${description}', '${image}')`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

app.post("/getCategoryById/:id", (req, res) => {
  const category_id = req.params.id;

  con.query(
    `SELECT * FROM categories WHERE category_id = ${category_id}`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

app.post("/updateCategory/:id", (req, res) => {
  const category_id = req.params.id;

  const name = req.body.name;
  const description = req.body.description;
  const image = req.body.image;

  con.query(
    `UPDATE categories SET name = '${name}', description = '${description}', image = '${image}' WHERE category_id = ${category_id}`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

module.exports = app;

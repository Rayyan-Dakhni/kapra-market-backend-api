const con = require("../config");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = require("express").Router();

app.get("/", (req, res) => {
  con.query("SELECT * FROM products", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/addNewProduct", upload.array("product_images"), (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const type = req.body.type;
  const category = req.body.category;
  const price = req.body.price;
  const product_images = req.files;

  con.query(
    `INSERT INTO products(name, description, price, type, category) VALUES('${name}', '${description}', '${price}', '${type}', '${category}')`,
    (err, results, fields) => {
      if (err) throw err;
      const product_id = results.insertId;
      product_images.map((image) => {
        con.query(
          `INSERT INTO product_images(product_id, image) VALUES('${product_id}', '${image.filename}')`,
          (err, results, fields) => {
            if (err) throw err;
          }
        );
      });
      res.send(results);
    }
  );
});

app.post("/getProductById/:id", (req, res) => {
  const product_id = req.params.id;
  con.query(
    `SELECT * FROM products WHERE product_id = '${product_id}'`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

app.post("/updateProduct/:id", (req, res) => {
  const product_id = req.params.id;
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;

  con.query(
    `UPDATE products SET name = '${name}', description = '${description}', price = '${price}' WHERE product_id = ${product_id}`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

// PRODUCT IMAGES SECTION
app.get("/getImages/", (req, res) => {
  con.query(`SELECT * FROM product_images`, (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/getImageById/:id", (req, res) => {
  const product_id = req.params.id;

  con.query(
    `SELECT * FROM product_images WHERE product_id = '${product_id}'`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

// PRODUCT REVIEWS SECTION

app.get("/getReviews/", (req, res) => {
  con.query("SELECT * FROM product_reviews", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/getReviewsById/:id", (req, res) => {
  const product_id = req.parms.id;

  con.query(
    `SELECT * FROM product_reviews WHERE product_id = '${product_id}'`,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

module.exports = app;

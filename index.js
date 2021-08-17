require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const UsersRouter = require("./routes/user.routes");
const SellersRouter = require("./routes/seller.routes");
const CategoriesRouter = require("./routes/categories.routes");
const ProductsRouter = require("./routes/products.routes");
const ShopRoutes = require("./routes/shops.routes");

app.use(express.json());
app.use(cors());

app.use("/users", UsersRouter);
app.use("/sellers", SellersRouter);
app.use("/categories", CategoriesRouter);
app.use("/products", ProductsRouter);
app.use("/shops", ShopRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) throw err;
  console.log("app listening on " + port);
});

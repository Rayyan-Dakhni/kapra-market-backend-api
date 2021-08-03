require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const UsersRouter = require("./routes/user.routes");

app.use(express.json());

app.use("/users", UsersRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) throw err;
  console.log("app listening on " + port);
});

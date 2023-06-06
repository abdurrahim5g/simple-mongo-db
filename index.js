const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

// Middleware
app.use(cors());

// all datas
const users = require("./data/user.json");

app.get("/", (req, res) => {
  res.send("Simple MongoDB Server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Simple MongoDB server is running on http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Simple MongoDB Server is running");
});

app.listen(port, () => {
  console.log(`Simple MongoDB server is running on http://localhost:${port}`);
});

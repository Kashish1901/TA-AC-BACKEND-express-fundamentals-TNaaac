var express = require("express");

var app = express();

app.get("/", (req, res) => {});

app.get("/about", (req, res) => {});

app.listen(3000, () => {
  console.log("Server listening on port 3k");
});

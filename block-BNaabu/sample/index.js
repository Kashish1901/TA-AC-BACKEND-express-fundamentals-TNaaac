var express = require("express");
var logger = require("morgan");

var app = express();
app.use(logger("dev"));

app.use("/admin", (req, res, next) => {
  next("unauthorized to access");
});
app.get("/", (req, res) => {
  res.send("Welcome to express!");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page!");
});

app.use((req, res, next) => {
  res.send("Page not found!");
});

app.use((error, req, res, next) => {
  res.status(500).send(error);
});
app.listen(3000, () => {
  console.log("Server listening on port 3k");
});

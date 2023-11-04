var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");

var app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use("/about", (req, res, next) => {
  console.log(req.cookies);
  res.cookie("username", "kashish1909");
  next();
});

app.get("/about", (req, res) => {
  res.send("completed!");
});
app.listen(3000, () => {
  console.log("Server listening on port 3k");
});

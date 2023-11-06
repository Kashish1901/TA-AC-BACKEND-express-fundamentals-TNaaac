var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");

app.use(logger("dev"));

app.use(cookieParser());

app.use((req, res, next) => {
  req.cookies("username", "assign");
  res.send("all about");
});
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.setHeader("content-type", "text/html");
  res.send("<h2>Welcome to Express!</h2>");
});

app.get("/about", (req, res) => {
  res.send("My name is qwerty");
});

app.get("/users/:username", (req, res) => {
  var username = req.params.username;
  res.send(username);
});
app.post("/form", (req, res) => {
  res.send(req.body);
});

app.post("/json", (req, res) => {
  res.send(req.body);
});

app.use((req, res, next) => {
  res.send("Page not found");
});

app.use((error, req, res, next) => {
  res.status(500).send(error);
});
app.listen(3000, () => {
  console.log("server listening on port 3k");
});

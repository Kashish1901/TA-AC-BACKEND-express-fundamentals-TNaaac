var express = require("express");

var app = express();
var logger = require("morgan");
var cookieParser = require("cookie-parser");
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(logger("dev"));
app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie("name", "xyz");
  next();
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/", (req, res) => {
  res.send("<h2>Welcome to home page!</h2>");
});

app.get("/users", (req, res) => {
  res.send("Hello user!");
});

app.get("/projects", (req, res) => {
  res.sendFile(__dirname + "/projects.html");
});
//handling errors
app.use((req, res, next) => {
  res.send("Page not found!");
});

app.use((error, req, res, next) => {
  res.send(error);
});
app.listen(4000, () => {
  console.log("Server listening on port 4k");
});

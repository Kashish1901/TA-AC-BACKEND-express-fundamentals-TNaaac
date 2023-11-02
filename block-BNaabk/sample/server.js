var express = require("express");

var server = express();
server.get("/", (req, res) => {
  res.send("Welcome to Express!");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

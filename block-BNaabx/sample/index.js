var express = rquire("express");
var app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use((req, res, next) => {
  res.json(req.body);
});
app.listen(4000, () => {
  console.log("Server listening on port 4k");
});

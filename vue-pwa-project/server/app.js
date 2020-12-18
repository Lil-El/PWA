const express = require("express");

let app = express();
app.use("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Method", ["GET"]);
  if (req.method == "OPTION") {
    res.send();
  }
  next();
});
app.get("/user", (req, res) => {
  res.send({ name: "yxd" });
});

app.listen(3000);

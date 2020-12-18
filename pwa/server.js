const express = require("express");

let app = express();
const json = require("./imgs.json");
app.use(express.static(__dirname));
app.get("/api/img", (req, res) => {
  let start = Math.round(Math.random() * 2);
  res.json(json.slice(start, start + 3));
});
app.listen(3000);

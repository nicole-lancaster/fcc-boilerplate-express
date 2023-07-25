let express = require("express");
let app = express();

console.log("Hello World!");

app.get("/", expressGreeting);

function expressGreeting(req, res) {
  res.send("Hello Express");
}

module.exports = app;

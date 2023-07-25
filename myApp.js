let express = require("express");
let app = express();

console.log("Hello World!");

const expressGreeting = (req, res) => {
  return res.send("Hello Express");
}

app.get("/", expressGreeting);

module.exports = app;

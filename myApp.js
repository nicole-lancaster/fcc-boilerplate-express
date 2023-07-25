let express = require("express");
let app = express();

const absolutePath = `${__dirname}/views/index.html`;

const serveHtmlPath = (req, res) => {
  return res.sendFile(absolutePath);
};

const helloJson = (req, res) => {
  return res.send({ message: "Hello json" });
};

app.use("/public", express.static(`${__dirname}/public`));
app.get("/", serveHtmlPath);
app.get("/json", helloJson);

module.exports = app;

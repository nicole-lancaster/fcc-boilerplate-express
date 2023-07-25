let express = require("express");
let app = express();

const absolutePath = `${__dirname}/views/index.html`;

const serveHtmlPath = (req, res) => {
  return res.sendFile(absolutePath);
};

app.get("/", serveHtmlPath);

module.exports = app;

let express = require("express");
let app = express();

const absolutePath = `${__dirname}/views/index.html`;

const serveHtmlPath = (req, res) => {
  return res.sendFile(absolutePath);
};

app.use("/public", express.static(`${__dirname}/public`))
app.get("/", serveHtmlPath);


module.exports = app;

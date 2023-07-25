let express = require("express");
let app = express();
require("dotenv").config();

const absolutePath = `${__dirname}/views/index.html`;

const serveHtmlPath = (req, res) => {
  return res.sendFile(absolutePath);
};

const helloJson = (req, res) => {
  const jsonMsg = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.send({ message: jsonMsg.toUpperCase() });
  } else {
    return res.send({ message: jsonMsg });
  }
};
const logger = (req, res, next) => {
  const method = req.method;
  const path = req.path;
  const ipAddress = req.ip;

  console.log(`${method} ${path} - ${ipAddress}`);
  next();
};
app.use(logger);
app.use("/public", express.static(`${__dirname}/public`));
app.get("/", serveHtmlPath);
app.get("/json", helloJson);

module.exports = app;

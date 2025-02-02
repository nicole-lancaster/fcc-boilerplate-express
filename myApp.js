let express = require("express");
let app = express();
require("dotenv").config();
const bodyParser = require("body-parser");

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
const getTime = (req, res, next) => {
  req.time = new Date().toString();
  next();
};
const sendTime = (req, res) => {
  return res.send({ time: req.time });
};

const getWordParams = (req, res, next) => {
  const word = req.params.word;
  return res.send({ echo: word });
};

const getNameQueries = (req, res, next) => {
  const firstName = req.query.first;
  const lastName = req.query.last;
  return res.send({ name: `${firstName} ${lastName}` });
};

const postNameQueries = (req, res, next) => {
  const firstName = req.body.first;
  const lastName = req.body.last;
  const responseBody = { name: `${firstName} ${lastName}` };
  return res.send(responseBody);
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger);
app.use("/public", express.static(`${__dirname}/public`));
app.get("/", serveHtmlPath);
app.get("/json", helloJson);
app.get("/now", getTime, sendTime);
app.get("/:word/echo", getWordParams);
app.route("/name").get(getNameQueries).post(bodyParser.json(), postNameQueries);

module.exports = app;

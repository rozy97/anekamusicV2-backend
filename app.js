// load module
require("dotenv/config");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const router = require("./src/Routes/root");

// initial express
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

//menambahkan middleware CORS agar bisa diakses untuk dari app lain
let allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

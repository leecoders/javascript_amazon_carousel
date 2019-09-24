const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mysql = require("mysql2");

const Model = require("./model/model.js");
const connection = mysql.createConnection({
  host: "106.10.34.142",
  port: "3306",
  user: "leecoders",
  password: "jmlee94",
  database: "amazon"
});

const indexRouter = require("./routes/index");
const { signinRouter, passModel } = require("./routes/signin");
const usersRouter = require("./routes/users");

const app = express();
const model = new Model(connection);

passModel(model);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/signin", signinRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

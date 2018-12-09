//installed middleware
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//node.js pre-installed middleware
const path = require("path");
const http = require("http");

//Database connection
const db = require("./db");
const app = express();

// Set Port
const port = process.env.PORT || "3000";
const expenseRoutes = require("./routes/expense.routes");

app.use(cors());
app.options('*', cors());

// Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = {
  app,
  port
};

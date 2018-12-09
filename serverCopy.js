//installed middleware
const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require('cors')

const { app, port } = require('./server/app');

//node.js pre-installed middleware
const path = require("path");
const http = require("http");

//Database connection
// const db = require('./server/db');
// const app = express();

// Set Port
// const port = process.env.PORT || '3000';
const expenseRoutes = require('./server/routes/expense.routes');

// app.use(cors());

// // Parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/coincon')));
// routers
app.use('/api', expenseRoutes);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/coincon/index.html'));
});
// app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Running server on localhost:${port}`);
});

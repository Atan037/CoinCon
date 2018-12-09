const express = require("express");
const path = require("path");
const http = require("http");

const { app, port } = require('./server/app');

const expenseRoutes = require('./server/routes/expense.routes');

// app.use(express.static(path.join(__dirname, 'dist/coincon')));

// routers
app.use('/api', expenseRoutes);

// Send all other requests to the Angular app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/coincon/index.html'));
// });

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Running server on localhost:${port}`);
});

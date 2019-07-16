const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('first middleware');
  next(); //call next if not sending a response
});

app.use((req, res, next) => {
  res.send('hello from express!');
});

module.exports = app;

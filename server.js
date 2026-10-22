const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');
const app = express();
const PORT = 3000;

app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Welcome to the Module 5 Lab 1 app!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
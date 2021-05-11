const express = require('express');
const db = require('../db/index');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(authRoutes);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
})

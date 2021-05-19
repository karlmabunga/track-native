require('./models/User')
require('./models/Track')
const express = require('express');
const db = require('./db/index');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middleware/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email is: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
})

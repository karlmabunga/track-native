const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/track', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We\'re connected to mongo instance!')
});

module.export = db;
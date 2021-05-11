const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '')));

app.get('/', function(req, res) {
   console.log('server starting............'+path.join(__dirname, '/dist/', 'index.html'));
  res.sendFile(path.join(__dirname, '/dist/', 'index.html'));
  console.log('server starting............after');
});

app.listen(8085);

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.listen(process.env.PORT || 3000, function (req, res) {
  console.log('Listening on port', process.env.PORT || 3000);
});

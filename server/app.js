var express = require('express');
const path = require('path');
var app = express();

app.use(express.static(path.resolve('./')));

app.get('/test/:username', function (req, res) {

    const username = req.params.username;

    res.send('test User: ' + username);
  });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('*', function (req, res) {
    res.send('page not found');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
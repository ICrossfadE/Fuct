var express = require('express');
const path = require('path');
var app = express();
const port = process.env.PORT || 3000;
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

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
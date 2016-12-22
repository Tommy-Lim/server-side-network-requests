var express = require('express');
var request = require('request');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  request('http://www.omdbapi.com/?s=star+wars', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var results = JSON.parse(body).Search;

      console.log(results);
      res.render('results', {results: results});
    }
  });
})

app.listen(3000);

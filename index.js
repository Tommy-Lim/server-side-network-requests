var express = require('express');
var request = require('request');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  var baseUrl = 'http://www.omdbapi.com/';
  var query = 'star wars';

  // allow people to search using query parameters.
  if (req.query.q !== undefined) {
    query = req.query.q;
  }

  // attach the query to the url.
  var url = baseUrl + '?s=' + query;

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var results = JSON.parse(body).Search;

      console.log(results);
      res.render('results', {results: results});
    }
  });
})

app.listen(3000);

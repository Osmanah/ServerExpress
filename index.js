var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function (req, res) {
  res.send('Michel, Nicola, Abu');
});

app.get('/users/:name', function (req, res) {
  res.send('Hello ' + req.params.name);
});


app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});




// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
//
// app.get('/coucou/*', function(req, res){
  // res.send('Hello coucou ' +req.query.nom);
//   console.log('params ', req.params);
//   res.send('Hello coucou ' + JSON.stringfy(req.params));
// });

// requirements
var express = require('express'),
app = express();

app.set('view engine', 'ejs');

var vegetables = [
            'Carrots',
            'Cucumber',
            'Peas'
            ];

// a 'GET' request to '/' will run the function below
// app.get('/', function (req, res) {
//   // send back the response: 'Hello World'
//   res.send('Hello World');
// });

app.get('/vegetables', function (req, res) {
  // send all the veggies
  res.send(vegetables.join(', '));
});

app.get('/hello/:name', function (req, res) {
  res.send( 'Hello, ' + req.params.name);
});

app.get('/', function (req, res) {
  // use res.render
  res.render('index', {name: 'Elie'});
});

app.get('/hi', function (req, res) {
  var name = req.query.name;
  res.send('Hello, ' + name);
});

// start the server
app.listen(3000, function () {
  console.log('Go to localhost:3000/');
});

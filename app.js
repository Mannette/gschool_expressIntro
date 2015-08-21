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
  res.send('Hello, ' + req.params.name);
});

app.get('/', function (req, res) {
  // use res.render
  res.render('index', {name: 'Ethan'});
});

app.get('/hi', function (req, res) {
  var name = req.query.name;
  res.send('Hello, ' + name);
});

// start the server
app.listen(3000, function () {
  console.log('Go to localhost:3000/');
});

// express calculator
// adding
app.get('/add/:num1/:num2', function (req, res) {
  // res.render('index', {name: Number(req.params.num1) + Number(req.params.num2)});
  res.send('The total is ' + (Number(req.params.num1) + Number(req.params.num2)));
});
// subtracting
app.get('/sub/:num1/:num2', function (req, res) {
  res.send('The total is ' + (Number(req.params.num1) - Number(req.params.num2)));
});
// multiplying
app.get('/mult/:num1/:num2', function (req, res) {
  res.send('The total is ' + (Number(req.params.num1) * Number(req.params.num2)));
});
// dividing
app.get('/div/:num1/:num2', function (req, res) {
  res.send('The total is ' + (Number(req.params.num1) / Number(req.params.num2)));
});

// one route which does each operator.
app.get('/math/:num1/:num2', function (req, res) {
  res.send('The added total is ' +
  (Number(req.params.num1) +
  Number(req.params.num2)) + '<br>' +
  'The subtracted total is ' +
  (Number(req.params.num1) -
  Number(req.params.num2)) + '<br>' +
  'The multiplied total is ' +
  (Number(req.params.num1) *
  Number(req.params.num2)) + '<br>' +
  'The divided total is ' +
  (Number(req.params.num1) /
  Number(req.params.num2)));
});

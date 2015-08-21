var fs = require('fs');
var file = 'test.txt';
var http = require('http');


// synchronous reading
var lines = fs.readFileSync(file).toString().split('\n').length - 2;

console.log(lines);

// asynchronous reading
fs.readFile(file, function (err, contents) {

  var lines = contents.toString().split('\n').length - 2;

  console.log(lines);

});


// http request to store data into an array
var dataArr = [];

var firstUrl = 'http://omdbapi.com/?i=tt0241527';
http.get(firstUrl, function (res) {
  res.setEncoding('utf8');
  // res.on('data', console.log);
  res.on('data', function (data) {
    dataArr.push(data);
    console.log(dataArr);
  });

  res.on('error', console.error);
  // console.log(dataArr);
});
var secondUrl = 'http://omdbapi.com/?i=tt0295297';
http.get(secondUrl, function (res) {
  res.setEncoding('utf8');
  // res.on('data', console.log);
  res.on('data', function (data) {
    dataArr.push(data);
    console.log(dataArr);
  });

  res.on('error', console.error);
  // console.log(dataArr);
});

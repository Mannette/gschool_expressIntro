var fs = require('fs');
var file = 'test.txt';

// synchronous reading
var lines = fs.readFileSync(file).toString().split('\n').length-2;

console.log(lines);

// asynchronous reading
fs.readFile(file, function (err, contents) {

  var lines = contents.toString().split('\n').length-2;

  console.log(lines);

});

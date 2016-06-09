var fs = require('fs');
var content = fs.readFileSync('read-file.txt');
console.log(decodeURIComponent(content));
console.log("End");

console.log("\n");


fs.readFile('read-file.txt', function (err, content) {
    console.log(decodeURIComponent(content));
});
console.log("The end");
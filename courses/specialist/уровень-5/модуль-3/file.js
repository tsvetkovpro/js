var fs = require('fs');

var file = fs.createReadStream('info.txt');
var newFile = fs.createWriteStream('info-2.txt');

file.pipe(newFile);
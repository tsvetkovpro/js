var fs = require('fs');
var http = require('http').createServer().listen(8088);

http.on('request', function (req, res) {
    res.writeHead(200);
    var newFile = fs.createWriteStream('file-2.txt');
    // req.pipe(newFile); - метод "быстрый" но всё проходит мимо нас
    req.on('data', function (txt) {
        txt = 'new: ' + txt;
        newFile.write(txt);
    });
    req.on('end', function () {
        res.end('Загруженно!');
    });
});



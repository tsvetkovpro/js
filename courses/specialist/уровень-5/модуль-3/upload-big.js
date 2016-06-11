var fs = require('fs');
var http = require('http').createServer().listen(8088);

http.on('request', function (req, res) {
    res.writeHead(200);
    var newFile = fs.createWriteStream('file-big.txt');
    req.on('data', function (txt) {
        var buffer = newFile.write(txt);
        if (!buffer) {
            console.log('На паузе ....');
            req.pause();
        }
    });
    newFile.on('drain', function () {
        req.resume();
    }); // когда сам освободился вызывает событие
    req.on('end', function () {
        res.end('Загруженно!');
    });
});



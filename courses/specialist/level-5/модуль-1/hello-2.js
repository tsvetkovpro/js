var http = require('http');

var server = http.createServer().listen(8088);

server.on('request', function (req, res) {
    res.writeHead(200);
    res.write('Hello');
    res.end('The end');
});

server.on('request', function (req, res) {
    console.log('Req....', req.method, req.url);
});

server.on('listening', function () {
    console.log('listt...');
});


















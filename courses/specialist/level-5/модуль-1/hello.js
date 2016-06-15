var http = require('http');

/*function foo (request, response) {
    response.writeHead(200);
    response.write('Hello, world !!!');
    response.end();
}*/

var app = http.createServer(function (request, response) {
    response.writeHead(200);
    response.write('Hello, world !!');
    setTimeout(function() {
        response.write('Hello .... done');
        response.end();
    }, 5000);
   //response.end();
}).listen(8088);

/*app.listen(8088);*/
console.log("Listenning on port 8088...");


// тоже самое
/*var server = http.createServer();
server.on('request', function (req, res){});
server.on('close', function (req, res){});*/

















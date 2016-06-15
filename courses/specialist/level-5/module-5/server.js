// как бы нам принять вот этот параметр:
// curl http://localhost:8088/?name=ivan
var http = require('http');
var url = require('url');

http.createServer(function (req, res) { // ф-я обратного вызова, кот. принимает реквест и респонз
    var data = '';
    var input = url.parse(req.url);
    if(input.query) {
        var q = input.query.split('=');
        switch( q[1].toLowerCase() ) {
            case 'ivan': data = '[{"name":"Иван Петров", "age":22, "admin":true}]'; break;
            case 'vasya': data = '[{"name":"Вася Бтрс", "age":30, "admin":false}]'; break;
            default: data = '[{"name":"Unknow", "age":0, "admin":false}]';
        }
    }

    res.writeHead(200, {"Content-Type":"application/json"});
    res.write(data.toString());
    res.end();
}).listen(8088);
var socket = require('socket.io');
var express = require('express');
var app = express();
var io = socket.listen(app.listen(8088));


app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (client) { // client - будет текущий сокет. кто конкретно соединился тот попал сюда
    console.log('Соеденино...');

    client.on('message', function (data) {
        console.log('Просто message: ' + data);

        client.emit('hello', {
            hello: 'Привет ' + data
        }); // посылаем клиенту

        client.broadcast.emit('hello', {hello: 'Привет от ' + data});

        io.sockets.emit('hello', {hello: 'привет всем'});
    }); // "вешаем клиента на ожидание"

    client.on('disconnect', function () {
        io.sockets.emit('hello', {hello: 'Один дисконнект детектд...'});
    });
});















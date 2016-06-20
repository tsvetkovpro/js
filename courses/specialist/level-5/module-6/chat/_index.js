var express = require('express');
var app = express();
var port = 8088;

app.set('views', __dirname + '/tpl');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('page');
});

var io = require('socket.io').listen(app.listen(port));

var users = {};
function getUser(obj) {
    var tmp = [];
    for (var i in obj) {
        tmp.push(obj[i]);
    }
    return tmp.join(', ');
}

io.sockets.on('connection', function (client) {
    //console.log('сокет он');
    //client.emit('message', {message: 'Добро пожаловать в чат!'});
    client.on('send', function (data) {
        io.sockets.emit('message', {message:data.message}); // всем
    });

    client.on('privetstvie', function (data) {
        client.set('nickname', data.name);
        client.emit('message', {message: '... Добро пожаловать в чат ' + data.name + '...'});
        client.broadcast.emit('message', {message: '...' + data.name + ' присоеденился к чату ...'});

        if (Object.keys(users).length > 0) {
            var userList = getUser(users);
            client.emit('message', {message: '... Уже в чате: ' + userList + '...'});
        } else {
            client.emit('message', {message: '... Кроме Вас, в чате никого нет ...'});
        }
        users[client.id] = data.name;
    });

    client.on('disconnect', function (data) {
        if (Object.keys(users).length > 1) { // если клиент не единственный - последний то бишь
            client.get('nickname', function (err, name) {
                client.broadcast.emit('message', {message: '...' + name + ' покинул чат'});
            });
        }
        delete users[client.id];
    });
});






























var socket = require('socket.io');
var express = require('express');
var app = express();
var io = socket.listen(app.listen(8088));

app.set('views', __dirname);
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/jade-folder')); //папка для статических файлов

app.get('/', function (req, res) {
    res.render('page');
});
var express = require('express');
var app = express();
app.listen(8099);


var names = {
'ivan': 'paren',
    'yaroslav':'az',
    'olga':'user'
};

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/app.txt');
});

app.get('/user/:name', function(req, res) {
    var role;
    if(req.params.name in names) {
        role = names[req.params.name];
    } else {
        role = 'Неизвестный пользователь ....';
    }

    res.write(role);
    res.end();
});

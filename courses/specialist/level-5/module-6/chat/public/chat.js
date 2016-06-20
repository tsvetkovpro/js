var socket;

window.onunload = function () {
    socket.disconnect();
};

window.onload = function () {
    socket = io.connect('http://localhost:8088');

    var field = document.getElementById('field');
    var form = document.getElementById('form');
    var content = document.getElementById('content');

    var name = prompt('Как Вас зовут?', 'Гость');
    if (name) {
     socket.emit('privetstvie', {name: name});
    }

    form.onsubmit = function () {
        var text = field.value; // - выбрать введённые пользователем данные из текстового поля
        socket.emit('send', {message: text}); // - послать выбранные данные на сервер в сообщении под именем 'send'
        return false; // reload page off
    };

    var messages = [];

    socket.on('message', function (data) {
        if (data.message) {
            messages.push(data.message);
            var html = '';
            for (var i = 0; i < messages.length; i++) {
                html += messages[i] + '<br/>';
            }
            content.innerHTML = html;
        } else {
            console.log('Some error ...');
        }
    });
};


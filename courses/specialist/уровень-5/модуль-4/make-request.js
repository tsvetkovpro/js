var http = require('http');

var makeRequest = function (msg) {
    console.log('Start...');
    var options = {
        host: 'localhost',
        port: '8088',
        path: '/',
        method: 'POST'
    };

    var request = http.request(options, function (response) {
        console.log('Response start ...');
        response.on('data', function (data) {
            console.log('Дата: ', data.toString());
        });
    });

    request.write(msg);
    request.end();
};

// makeRequest('Привет мир!');

module.exports = makeRequest;

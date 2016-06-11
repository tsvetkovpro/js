var http = require('http').createServer().listen(8088);

http.on('request', function (req, res) {
    res.writeHead(200);
    res.write('Start ...');
    res.write('Finish.');
    res.end();
    req.pipe(res); // возьми всё что пришло от реквеста и отправь в респонз "оттуда - сюда"

// если нужно детально то 2ой способ:
    /*
 1. объявили событие data
 2. ....
    req.on('data', function (msg) {
     console.log(msg.toString()); //обёртка вот над этим -> process.stdout.write(msg.toString());
     });

     req.on('end', function () {
     // res.end();
     });
     */
});



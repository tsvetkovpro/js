﻿var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type':'image/gif'
    });
    var file = fs.createReadStream('logo.gif');
    file.pipe(res);

}).listen(8088);
/*file.on('data', function (txt) {
    // console.log(txt.toString());
    process.stdout.write(txt.toString());
});*/
// file.pipe(process.stdout); // "перелей это напрямую в консоль"


/*
 *	ЗАДАНИЕ 1
 
		1. Подключите модуль 'fs'
		2. Создайте поток для чтения файла index.html
		3. Опишите для события data функцию обратного вызова, которая выводит в консоль содержимое файла index.html
		4. Сохраните файл, запустите его в консоли и убедитесь в корректной работе кода
*/

/*
 *	ЗАДАНИЕ 2
 
		1. Измените вывод в консоль, используя вместо объекта консоль объект process
		2. Сохраните файл, запустите его в консоли и убедитесь в корректной работе кода
*/

/*
 *	ЗАДАНИЕ 3

		1. Измените код, чтобы вместо "прослушки" события data, содержимое файла отдавалось напрямую через метод потока pipe
		2. Сохраните файл, запустите его в консоли и убедитесь в корректной работе кода 
*/

/*
 *	ЗАДАНИЕ 4

		1. Создайте HTTP-сервер, который будет отдавать по запросу картинку logo.gif, используя метод потока для чтения pipe
		2. Сохраните файл и запустите сервер через консоль 
		3. Запросите сервер через браузер и убедитесь в корректной работе кода 
*/

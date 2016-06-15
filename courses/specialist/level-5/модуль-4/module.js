var h = require('./say-hello');
var w = require('./say-world');

var my = require('./say-my');

// разница
// в h пришла функция h();
// в w пришёл объект у которого есть свойсво world -> которое функция

h();
w.world();
require('./say-world').world(); // объект у него есть свойства


my.one();
my.two();
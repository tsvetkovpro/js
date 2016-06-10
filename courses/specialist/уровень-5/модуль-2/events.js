var events = require('events');
var EventEmitter = events.EventEmitter;

/*console.log(EventEmitter);
 { [Function: EventEmitter]
 EventEmitter: [Circular],
 usingDomains: false,
 defaultMaxListeners: [Getter/Setter],
 init: [Function],
 listenerCount: [Function] }
*/

var test = new EventEmitter();
test.on('myEvent', onMyEvent);

function onMyEvent (param) {
	console.log( arguments[0], arguments[1], arguments[2] ); // console.log(param.name, param.age); Ivan 21
}

test.emit('myEvent', 'one', 'two', 'three');

/*test.emit('myEvent', {name:'Ivan', age:21} );*/
/*
test.emit('myEvent', '1');
test.emit('myEvent', '2');*/

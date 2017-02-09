function* gen() {
	console.log("hello");
	yield;
	console.log("word");
}

var it = gen();

it.next();
it.next();
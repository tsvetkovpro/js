/* https://canho.me/2016/09/27/es6-iterator-in-depth/
Iterator: This interface defines 3 methods:
	- next(): [required] Returns next IteratorResult object
  - return(): [optional] Stops iterator and return IteratorResult object
  - throw(): [optional] Indicates an error and return IteratorResult object

IteratorResult: This interface defines following properties:
	 - value:[optional] Current iteration value, can be any values
   - done: Indicates completion status of iterator, can be truthy / falsy values

Iterable: This interface defines only one method:
   - @@iterator(): [required] Returns an Iterator
*/


// Arrays and Typed Arrays are iterable.
let arr = [1,2,3];
for (let item of arr) {
	console.log(item);
}


// Strings are also iterables.
for(let c of 'hello') {
	console.log(c); //h e l l o
}


// Maps are iterables over their entries. Each entry is an array [key, value].
const m = new Map();
m.set('a', 'A');
m.set('b', 'B');
for(let pair of m) {
	console.log(pair); //['a', 'A']
										 //['b', 'B']
}


// Sets are iterables over their elements.
const set = new Set();
set.add('a');
set.add('b');
set.add('c');
for(let e of set) {
	console.log(e); //a
									//b
									//c
}


// arguments
function test(){
	for(let param of arguments){
		console.log(param);
	}
}
test('a', 'b', 'c'); //a b c






// Iterable computed data

// Some ES6 data structures such as Map, Set, Arrays have following methods that return iterables:

// entries()
const set1 = new Set();
set1.add('a');
set1.add('b');
set1.add('c');
for(let e of set1.entries()) {
	console.log(e); //['a', 'a']
									//['b', 'b']
									//['c', 'c']
}

const m1 = new Map();
m1.set('a', 'A');
m1.set('b', 'B');
for(let pair of m1.entries()) {
	console.log(pair); //['a', 'A']
										 //['b', 'B']
}


// keys()
const set2 = new Set();
set2.add('a');
set2.add('b');
set2.add('c');
for(let e of set2.keys()) {
	console.log(e); //['a' ]
									//['b']
									//['c']
}

const m2 = new Map();
m2.set('a', 'A');
m2.set('b', 'B');
for(let pair of m2.keys()) {
	console.log(pair); //['a']
										 //['b']
}


// values()
const set3 = new Set();
set3.add('a');
set3.add('b');
set3.add('c');
for(let e of set3.values()) {
	console.log(e); //['a']
									//['b']
									//['c']
}

const m3 = new Map();
m3.set('a', 'A');
m3.set('b', 'B');
for(let pair of m3.values()) {
	console.log(pair); //['A']
										 //['B']
}


// Destructuring (via Array pattern)
const set4 = new Set();
set4.add('a');
set4.add('b');
set4.add('c');
set4.add('d');
let [a, b, ...cd] = set4;
//a='a'
//b='b'
//cd=['c', 'd']
const m4 = new Map();
m4.set('a', 'A');
m4.set('b', 'B');
let [e1, e2] = m4;
//e1: ['a', 'A']
//e2: ['b', 'B']



// Spread operator
// Spread operator can be used to insert iterables into an array.
const set5 = new Set();
set5.add('b');
set5.add('c');

let items = ['a', ...set5, 'd'];
// And spread operator can be used to convert an iterable to an array
const map = new Map();
map.set('b', 'B');
map.set('c', 'C');

let keys= [...map.keys()];








// APIs accepting iterables

// There are APIs accepting iterables:
//	- Map([iterable]), WeakMap([iterable]), Set([iterable]), WeakSet([iterable])
//  - Array.from([iterable]), Promise.all([iterable]), Promise.race([iterable])

let set6 = new Set('abca');
let map6 = new Map([[1,'a'],[2,'b'],[3,'c']]);


// Custom Iterator

let idGen = {
	[Symbol.iterator](){
		return this;
	},
	next(){
		return {value: Math.random(), done: false}
	}
};
let count = 0;
for(let id of idGen) {
	console.log(id);
	if (count > 4) {
		break;
	}
	count++;
}

let arrayLikeObj = {
	0: 'a',
	1: 'b',
	2: 'c',
	3: 'd',
	length: 4,
		[Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for(var e of arrayLikeObj) {
	console.log(e);
}




// Optional return(..) and throw(..)
/*
In for..of loops, the termination can be caused by:
  - break
  - return
  - throw
  - continue
In these cases, for..of loops let the iterator know about termination.
*/

var Fib = {
	[Symbol.iterator]() {
		var n1 = 1, n2 = 1;
		return {
			next() {
				var current = n2;
				n2 = n1;
				n1 = n1 + current;
				return { value: current, done: false };
			},
			return(v) {
				console.log('Fibonacci sequence terminated.');
				return { value: v, done: true };
			}
		}
	}

};

for (let n of Fib) {
	console.log(n);
	if (n > 20) {
		break;
	}
}



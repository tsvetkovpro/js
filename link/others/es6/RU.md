# ES6 по-человечески
<br>

### 1. let, const и блочная область видимости

Ключевое слово <code>let</code> позволяет объявлять переменные с ограниченной областью видимости — только для блока {...}, в котором происходит объявление. Это называется блочной областью видимости. Вместо ключевого слова <code>var</code>, которое обеспечивает область видимости внутри функции, стандарт ES6 рекомендует использовать <code>let</code>.

```javascript
var a = 2;
{
	let a = 3;
	console.log(a); // 3
}
console.log(a); // 2
```


Другой формой объявления переменной с блочной областью видимости является ключевое слово <code>const</code>. Оно предназначено для объявления переменных (констант), значения которых доступны только для чтения. Это означает не то, что значение константы неизменно, а то, что идентификатор переменной не может быть переприсвоен.
Вот простой пример:

```javascript
{
	const ARR = [5,6];
	ARR.push(7);
	console.log(ARR); // [5,6,7]
	ARR = 10; // TypeError
}
```

О чём стоит помнить:

* Когда дело касается поднятия переменных (hoisting) let и const, их поведение отличается от традиционного поведения var и function. И let и const не существуют до своего объявления (от переводчика: для подробностей автор оригинального руководства отсылает к статье Temporal Dead Zone)
* Областью видимости let и const является ближайший блок.
* При использовании const рекомендуется использовать ПРОПИСНЫЕ_БУКВЫ.
* В const одновременно с объявлением переменной должно быть присвоено значение.

<br>

### 2. Arrow Functions

Arrow Functions are a short-hand notation for writing functions in ES6. The arrow function definition consists of a parameter list <code>( ... )</code>, followed by the <code>=></code> marker and a function body.

```javascript
var getPrice = function() {
	return 4.55;
};

// Implementation with Arrow Function
var getPrice = () => 4.55;
```
Note that in the above example, the <code>getPrice</code> arrow function is implemented with "concise body" which does not need an explicit return statement.

Here is an example with the usual "block body"

```javascript
let arr = ['apple', 'banana', 'orange'];

let breakfast = arr.map(fruit => {
	return fruit + 's';
});

console.log(breakfast); // apples bananas oranges
```

**Behold! There is more...**

Arrow functions don't just make the code shorter. They are closely related to <code>this</code> binding behaviour.

Arrow functions behaviour with <code>this</code> keyword varies from that of normal functions. Each function in JavaScript defines its own <code>this</code> context but Arrow functions capture the <code>this</code> value of the enclosing context. Check out the following code:

```javascript
function Person() {
	// The Person() constructor defines `this` as an instance of itself.
  	this.age = 0;

  	setInterval(function growUp() {
    	// In non-strict mode, the growUp() function defines `this`
    	// as the global object, which is different from the `this`
    	// defined by the Person() constructor.
    	this.age++;
  	}, 1000);
}
var p = new Person();
```

In ECMAScript 3/5, this issue was fixed by assigning the value in <code>this</code> to a variable that could be closed over.

```javascript
function Person() {
	var self = this;
	self.age = 0;

	setInterval(function growUp() {
    	// The callback refers to the `self` variable of which
    	// the value is the expected object.
    	self.age++;
  	}, 1000);
}
```

As mentioned above, Arrow functions capture the this value of the enclosing context, so the following code works as expected.

```javascript
function Person(){
	this.age = 0;

	setInterval(() => {
    	this.age++; // |this| properly refers to the person object
  	}, 1000);
}

var p = new Person();
```
[Read more about 'Lexical this' in arrow functions here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Lexical_this)

<br>

### 3. Default Function Parameters

ES6 allows you to set default parameters in function definitions. Here is a simple illustration.

```javascript
let getFinalPrice = (price, tax=0.7) => price + price * tax;
getFinalPrice(500); // 850
```

<br>

### 4. Spread / Rest Operator

<code>...</code> operator is referred to as spread or rest operator, depending on how and where it is used.

When used with any iterable, it acts as to "spread" it into individual elements:

```javascript
function foo(x,y,z) {
	console.log(x,y,z);
}

let arr = [1,2,3];
foo(...arr); // 1 2 3
```

The other common usage of <code>...</code> is gathering a set of values together into an array. This is referred as "rest" operator.

```javascript
function foo(...args) {
	console.log(args);
}
foo( 1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
```

<br>

### 5. Object Literal Extensions

ES6 allows declaring object literals by providing shorthand syntax for initializing properties from variables and defining function methods. It also enables the ability to have computed property keys in an object literal definition.

```javascript
function getCar(make, model, value) {
	return {
		// with property value shorthand
		// syntax, you can omit the property
		// value if key matches variable
		// name
		make,  // same as make: make
		model, // same as model: model
		value, // same as value: value

		// computed values now work with
		// object literals
		['make' + make]: true,

		// Method definition shorthand syntax
		// omits `function` keyword & colon
		depreciate() {
			this.value -= 2500;
		}
	};
}

let car = getCar('Kia', 'Sorento', 40000);

// output: {
//     make: 'Kia',
//     model:'Sorento',
//     value: 40000,
//     makeKia: true,
//     depreciate: function()
// }
```

<br>

### 6. Octal and Binary Literals

ES6 has new support for octal and binary literals.
Prependending a number with <code>0o</code> or <code>0O</code> would convert it into octal value. Have a look at the following code:

```javascript
let oValue = 0o10;
console.log(oValue); // 8

let bValue = 0b10; // 0b or 0B for binary
console.log(bValue); // 2
```

<br>

### 7. Array and Object Destructuring

Desctructuring helps in avoiding the need for temp variables when dealing with object and arrays.

```javascript
function foo() {
	return [1,2,3];
}
let arr = foo(); // [1,2,3]

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3

function bar() {
	return {
		x: 4,
		y: 5,
		z: 6
	};
}
let {x: x, y: y, z: z} = bar();
console.log(x, y, z); // 4 5 6
```

<br>

### 8. super in Objects

ES6 allows to use <code>super</code> method in (classless) objects with prototypes. Following is a simple example:

```javascript
var parent = {
	foo() {
		console.log("Hello from the Parent");
	}
}

var child = {
	foo() {
		super.foo();
		console.log("Hello from the Child");
	}
}

Object.setPrototypeOf(child, parent);
child.foo(); // Hello from the Parent
			 // Hello from the Child
```

<br>

### 9. Template Literal and Delimiters

ES6 introduces an easier way to add interpolation which are evaluated automatically.

* <code>\`${ ... }\`</code> is used for rendering the variables.
* <code>\`</code> Backtick is used as delimiter.

```javascript
let user = 'Kevin';
console.log(`Hi ${user}!`); // Hi Kevin!
```

<br>

### 10. for...of vs for...in
* <code>for...of</code> iterates over iterable objects, such as array.

```javascript
let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname of nicknames) {
	console.log(nickname);
}
Result: di, boo, punkeye
```

* <code>for...in</code> iterates over all enumerable properties of an object.

```javascript
let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname in nicknames) {
	console.log(nickname);
}
Result: 0, 1, 2, size
```

<br>

### 11. Map and WeakMap

ES6 introduces new set of data structures called <code>Map</code> and <code>WeakMap</code>. Now, we actually use maps in JavaScript all the time. Infact every object can be considered as a <code>Map</code>.

An object is made of keys (always strings) and values, whereas in <code>Map</code>, any value (both objects and primitive values) may be used as either a key or a value. Have a look at this piece of code:

```javascript
var myMap = new Map();

var keyString = "a string",
    keyObj = {},
    keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"
```

**WeakMap**

A <code>WeakMap</code> is a Map in which the keys are weakly referenced, that doesn’t prevent its keys from being garbage-collected. That means you don't have to worry about memory leaks.

Another thing to note here- in <code>WeakMap</code> as opposed to <code>Map</code> *every key must be an object*.

A <code>WeakMap</code> only has four methods <code>delete(key)</code>, <code>has(key)</code>, <code>get(key)</code> and <code>set(key, value)</code>.

```javascript
let w = new WeakMap();
w.set('a', 'b'); 
// Uncaught TypeError: Invalid value used as weak map key

var o1 = {},
    o2 = function(){},
    o3 = window;

w.set(o1, 37);
w.set(o2, "azerty");
w.set(o3, undefined);

w.get(o3); // undefined, because that is the set value

w.has(o1); // true
w.delete(o1);
w.has(o1); // false
```

<br>

### 12. Set and WeakSet

Set objects are collections of unique values. Duplicate values are ignored, as the collection must have all unique values. The values can be primitive types or object references.

```javascript
let mySet = new Set([1, 1, 2, 2, 3, 3]);
mySet.size; // 3
mySet.has(1); // true
mySet.add('strings');
mySet.add({ a: 1, b:2 });
```

You can iterate over a set by insertion order using either the `forEach` method or the `for...in` loop.

```javascript
mySet.forEach((item) => {
  console.log(item);
	// 1
	// 2
	// 3
	// 'strings'
	// Object { a: 1, b: 2 }
});

for (let value of mySet) {
  console.log(value);
	// 1
	// 2
	// 3
	// 'strings'
	// Object { a: 1, b: 2 }
}
```
Sets also have the ` delete()` and ` clear()` methods.

**WeakSet**

Similar to <code>WeakMap</code>, the <code>WeakSet</code> object lets you store weakly held *objects* in a collection. An object in the <code>WeakSet</code> occurs only once; it is unique in the WeakSet's collection.

```javascript
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, foo has not been added to the set

ws.delete(window); // removes window from the set
ws.has(window);    // false, window has been removed
```

<br>

### 13. Classes in ES6

ES6 introduces new class syntax. One thing to note here is that ES6 class is not a new object-oriented inheritance model. They just serve as a syntactical sugar over JavaScript's existing prototype-based inheritance.

One way to look at a class in ES6 is just a new syntax to work with prototypes and contructor functions that we'd use in ES5.

Functions defined using the `static` keyword implement static/class functions on the class.

```javascript
class Task {
	constructor() {
		console.log("task instantiated!");
	}
	
	showId() {
		console.log(23);
	}
	
	static loadAll() {
		console.log("Loading all tasks..");
	}
}

console.log(typeof Task); // function
let task = new Task(); // "task instantiated!"
task.showId(); // 23
Task.loadAll(); // "Loading all tasks.."
```

**extends and super in classes**

Consider the following code:

```javascript
class Car {
	constructor() {
		console.log("Creating a new car");
	}
}

class Porsche extends Car {
	constructor() {
		super();
		console.log("Creating Porsche");
	}
}

let c = new Porsche();
// Creating a new car
// Creating Porsche
```

<code>extends</code> allow child class to inherit from parent class in ES6. It is important to note that the derived constructor must call super().

Also, you can call parent class's method in child class's methods using <code>super.parentMethodName()</code>

[Read more about classes here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)

A few things to keep in mind:

* Class declarations are not hoisted. You first need to declare your class and then access it, otherwise ReferenceError will be thrown.
* There is no need to use <code>function</code> keyword when defining functions inside a class definition.

<br>

### 14. Symbol

A symbol is a unique and immutable data type introduced in ES6. The purpose of a symbol is to generate a unique identifier but you can never get any access to that identifier.

Here’s how you create a symbol:

```javascript
var sym = Symbol( "some optional description" );
console.log(typeof sym); // symbol
```

Note that you cannot use new with Symbol(..).

If a symbol is used as a property/key of an object, it’s stored in a special way that the property will not show up in a normal enumeration of the object’s properties.

```javascript
var o = {
	val: 10,
    [ Symbol("random") ]: "I'm a symbol",
};

console.log(Object.getOwnPropertyNames(o)); // val
```

To retrieve an object’s symbol properties, use <code>Object.getOwnPropertySymbols(o)</code>


<br>

### 15. Iterators

An iterator accesses the items from a collection one at a time, while keeping track of its current position within that sequence. It provides a <code>next()</code> method which returns the next item in the sequence. This method returns an object with two properties: done and value.

ES6 has <code>Symbol.iterator</code> which specifies the default iterator for an object. Whenever an object needs to be iterated (such as at the beginning of a for..of loop), its @@iterator method is called with no arguments, and the returned iterator is used to obtain the values to be iterated.

Let’s look at an array, which is an iterable, and the iterator it can produce to consume its values:

```javascript
var arr = [11,12,13];
var itr = arr[Symbol.iterator]();

itr.next(); // { value: 11, done: false }
itr.next(); // { value: 12, done: false }
itr.next(); // { value: 13, done: false }

itr.next(); // { value: undefined, done: true }
```

Note that you can write custom iterators by defining <code>\[Symbol.iterator]()</code> with the object definition.

<br>

### 16. Generators

Generator functions are a new feature in ES6 that allow a function to generate many values over time by returning an object which can be iterated over to pull values from the function one value at a time.

A generator function returns an **iterable oject** when it's called.
It is written using the new <code>*</code> syntax as well as the new <code>yield</code> keyword introduced in ES6.

```javascript
function *infiniteNumbers() {
	var n = 1;
  	while (true){
    	yield n++;
  	}
}

var numbers = infiniteNumbers(); // returns an iterable object

numbers.next(); // { value: 1, done: false }
numbers.next(); // { value: 2, done: false }
numbers.next(); // { value: 3, done: false }
```

Each time yield is called, the yielded value becomes the next value in the sequence.

Also, note that generators compute their yielded values on demand, which allows them to efficiently represent sequences that are expensive to compute, or even infinite sequences.

<br>

### 17. Promises

ES6 has native support for promises. A promise is an object that is waiting for an asynchronous operation to complete, and when that operation completes, the promise is either fulfilled(resolved) or rejected.

The standard way to create a Promise is by using the <code>new Promise()</code> constructor which accepts a handler that is given two functions as parameters. The first handler (typically named <code>resolve</code>) is a function to call with the future value when it's ready; and the second handler (typically named <code>reject</code>) is a function to call to reject the Promise if it can't resolve the future value.

```javascript
var p = new Promise(function(resolve, reject) {  
	if (/* condition */) {
    	resolve(/* value */);  // fulfilled successfully
   	}
   	else {
   		reject(/* reason */);  // error, rejected
   	}
});
```

Every Promise has a method named <code>then</code> which takes a pair of callbacks. The first callback is called if the promise is resolved, while the second is called if the promise is rejected.

```javascript
p.then((val) => console.log("Promise Resolved", val),
       (err) => console.log("Promise Rejected", err));
```

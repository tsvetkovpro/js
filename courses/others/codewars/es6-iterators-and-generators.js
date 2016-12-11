let message = 'ok';
let messageIterator = message[Symbol.iterator]();

messageIterator.next();

for ( let item of messageIterator ) {
	console.log( item ); // k
}
// Solution: Similarly to generators, in case of strings, arrays, DOM elements, sets, and maps, an iterator object is also an iterable.
// Therefore, in the for-of loop, the remaining k letter is printed out.





// Create a countdown iterator that counts from 9 to 1. Use generator functions!
let getCountdownIterator = function *() {
	let i = 10;
	while( i > 1 ) {
		yield --i;
	}
}

console.log( [ ...getCountdownIterator() ] ); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
// The generator function yields the numbers 9 to 1. The spread (...) operator consumes all values. Then the generator function returns undefined, ending the iteration process.




// Make the following object iterable:

// First Solution (well known symbol):
// We could use well known symbols to make todoList iterable. We can add a *[Symbol.iterator] generator function that yields the elements of the array. This will make the todoList object iterable, yielding the elements of todoItems one by one.
let todoList = {
	todoItems: [],
	*[Symbol.iterator]() {
		yield* this.todoItems;
	},
	addItem( description ) {
		this.todoItems.push( { description, done: false } );
		return this;
	},
	crossOutItem( index ) {
		if ( index < this.todoItems.length ) {
			this.todoItems[index].done = true;
		}
		return this;
	}
};

let iterableTodoList = todoList;


// Second solution (generator function):
// If you prefer staying away from well known symbols, it is possible to make your code more semantic:
let todoList2 = {
	todoItems: [],
	addItem( description ) {
		this.todoItems.push( { description, done: false } );
		return this;
	},
	crossOutItem( index ) {
		if ( index < this.todoItems.length ) {
			this.todoItems[index].done = true;
		}
		return this;
	}
}

todoList2.addItem( 'task 1' ).addItem( 'task 2' ).crossOutItem( 0 );

let todoListGenerator = function *() {
	yield* todoList2.todoItems;
}

let iterableTodoList2 = todoListGenerator();





// // Determine the values logged to the console without running the code. Instead of just writing down the values, formulate your thought process and explain to yourself how the code runs line by line.
// let errorDemo = function *() {
// 	yield 1;
// 	throw 'Error yielding the next result';
// 	yield 2;
// }
//
// let it = errorDemo();
//
// console.log( it.next() );
// // Object {value: 1, done: false}
//
// console.log( it.next() );
// // Uncaught Error yielding the next result
//
// console.log( [...errorDemo()] );
// // Uncaught Error yielding the next result
//
// for ( let element of errorDemo() ) {
// 	console.log( element );
// }
// // Object {value: 1, done: false}
// // Uncaught Error yielding the next result





function *fibonacci() {
	let a = 0, b = 1;
	yield a;
	yield b;
	while( true ) {
		[a, b] = [b, a+b];
		yield b;
	}
}
// Note that you only want to get the next() element of an infinite sequence. Executing [...fibonacci()] will skyrocket your CPU usage,
// speed up your CPU fan, and then crash your browser.





// Create a lazy filter generator function. Filter the elements of the Fibonacci sequence by keeping the even values only.
function *filter( iterable, filterFunction ) {
	for( let element of iterable ) {
		if ( filterFunction( element ) ) yield element;
	}
}

let evenFibonacci = filter( fibonacci(), x => x%2 === 0 );

evenFibonacci.next()
// {value: 0, done: false}
evenFibonacci.next()
// {value: 2, done: false}
evenFibonacci.next()
// {value: 8, done: false}
evenFibonacci.next()
// {value: 34, done: false}
evenFibonacci.next()
// {value: 144, done: false}
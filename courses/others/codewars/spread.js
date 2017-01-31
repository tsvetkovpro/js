function doStuff (x, y, z) { }
var args = [0, 1, 2];

// Call the function, passing args
console.log(doStuff.apply(null, args));

// With the spread operator we can avoid apply all together and simply call the function with the spread operator before the array:

console.log(doStuff(...args));




// Combine Arrays
// arr1.push(...arr2)  Adds arr2 items to end of array
// arr1.unshift(...arr2)Adds arr2 items to beginning of array

var arr1 = ['two', 'three'];
var arr2 = ['one', ...arr1, 'four', 'five'];

console.log(arr2); // ["one", "two", "three", "four", "five"]



// Copying Arrays
// Getting a copy of an array is a frequent tasks, something  we've used Array.prototype.slice to do in the past, but we can now use the spread operator to get a copy of an array:
var arr3 = [1,2,3];
var arr4 = [...arr3]; // like arr.slice()
console.log(arr4);
console.log(arr4.push(4));




// Convert arguments or NodeList to Array
// Much like copying arrays, we've used Array.Prototype.slice to convert NodeList and arguments objects and to true arrays, but now we can use the spread operator to complete that task:
// [...document.querySelectorAll('div')]
// You can even get the arguments as an array from within the signature:

	// var myFn(...args)

// Don't forget you can also do this with Array.from!




// Using Math Functions
// Of course the spread operator "spreads" an array into different arguments, so any function where spread is used as the argument can be used by functions that can accept any number of arguments.

let numbers = [9, 4, 7, 1];
console.log(Math.min(...numbers)); // 1




// Destructuring Fun
// Destructing is a fun practice that I'm using a ton of on my React projects, as well as other Node.js apps.  You can use destructuring and the rest operator together to extract the information into variables as you'd like them:
// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // { a: 3, b: 4 }





// Convert iterables to Arrays (not just arguments and NodeList):
console.log([...new Map().set(true, 'yes').set(false, 'no')]);  // [ [ true, 'yes' ], [ false, 'no' ] ]

//  Eliminate duplicates from an Array:
const arr = [7, 3, 1, 3, 3, 7];
console.log([...new Set(arr)]); // [ 7, 3, 1 ]

let cssInConsole = "%c%s";
let outputInConsole = "color: black; font: 1.4rem/1 Tahoma;";

// Arrays

// Assigning From Array to Local Variables
// Reading Values With Array Destructuring
// We can use destructuring to assign multiple values from an array to local variables.

let users = ["user1", "user2", "user3"];
let [a,b,c] = users;
console.log(cssInConsole, outputInConsole, `${a} ${b} ${c}`);

let [a1, ,b1] = users;
console.log(cssInConsole, outputInConsole, `${a1} ${b1}`);

console.log("\n");

// Combining Destructuring With Rest Params
// We can combine destructuring with rest parameters to group values into other arrays.
let usersWithRest = ["name1", "name2", "name3", "name4", "name5"];
let [first, ...rest] = usersWithRest;
console.log(cssInConsole, outputInConsole, `${first} ${rest}`);

console.log("\n");

// Destructuring Arrays From Return Values
// When returning arrays from functions, we can assign to multiple variables at once.

function activeUsers(){
    let users = ["Sam", "Alex", "Brook"];
    return users;
}

// Returns an array, as expected...
let active = activeUsers();
console.log(active);

// ...or assigns to individual variables. Handy!
let [a2, b2, c2] = activeUsers();
console.log(cssInConsole, outputInConsole, `${a2} ${b2} ${c2}`);

let [a21, b21, c21] = activeUsers();
console.log(cssInConsole, outputInConsole, `${a21} ${b21} ${c21}`);



// Using for...of to Loop Over Arrays
// The for...of statement  iterates over property values, and it’s a better way to loop over arrays and other iterable objects.

let names = ["name13", "name23", "name33"];

// bad past way . two steps
for (let index in names) {
    console.log(names[index]);
}

console.log("\n");

// right way
for (let name of names) {
    console.log(cssInConsole, outputInConsole, `${name}`);
}

// The for...of statement cannot be used to iterate over properties in plain JavaScript objects out-of-the-box.
console.log("\n");


let namesEx1 = ["SamEx", "TylerEx", "BrookEx"];
console.log( typeof namesEx1[Symbol.iterator] );
for(let name of namesEx1){
    console.log( name );
}
// Objects That Don’t Work With for...of
// No function assigned to the Symbol.iterator property means the object is not iterable.
let post = {
    title: "New features in JS",
    replies: 19,
    lastReplyFrom: "19"
};
console.log( typeof post[Symbol.iterator]); // undefined
/*
for (let property of post) {
    console.log(property); // not work
}
*/

console.log("\n");

// Finding an Element in an Array
// Array.find returns the first element in the array that satisfies a provided testing function.

let users12 = [
    {login: "Sam", admin: false},
    {login: "Brook", admin: true},
    {login: "Tyler", admin: true}
];

let adm = users12.find( (user) =>{
    return user.admin;
});
console.log(adm);

console.log("\n");

let adm123 = users12.find(user => user.admin);
console.log(adm123);



















let cssInConsole = "%c%s";
let outputInConsole = "color: black; font: 1.4rem/1 Tahoma;";

// Maps

// Storing Key/Values With Map
// The Map object is a simple key/value data structure. Any value may be used as either a key or a value, and objects are not converted to strings.

let user1 = {name: "Sam"};
let user2 = {name: "Tyler"};
let user3 = {name: "Ivan"};

let totalReplies = new Map();
totalReplies.set( user1, 5 );
totalReplies.set( user2, 44 );
totalReplies.set( user3, 63 );

console.log(totalReplies.get(user1));
console.log(cssInConsole, outputInConsole, totalReplies.get(user2));
console.log(totalReplies.get(user3));





// Use Maps When Keys Are Unknown Until Runtime
/*
let recentPosts = new Map();
 createPost(newPost, (data) => {
 recentPosts.set( data.author, data.message ); // Keys unknown until runtime, so... Map!
});

const POSTS_PER_PAGE = 15;
let userSettings = {
 perPage: POSTS_PER_PAGE,
 showRead: true,
}; // Keys are previously defined, so... Object!
* */

// Use Maps When Types Are the Same
// All keys are the same type, and all values are the same type, so Map!
// Some values are numeric, others are boolean, so Object!



// Iterating Maps With for...of
// Maps are iterable, so they can be used in a for…of loop. Each run of the loop returns a [key, value] pair for an entry in the Map.

let mapSettings = new Map();

mapSettings.set( "user", "Sam" );
mapSettings.set( "topic", "ES2015" );
mapSettings.set( "replies", ["Can't", "So cool"] );

for (let [key, value] of mapSettings) { // Remember array destructuring ?
    console.log(`${key} = ${value}`);
}


console.log("\n");


// WeakMap
// The WeakMap is a type of Map where only objects can be passed as keys. Primitive data types — such as strings, numbers, booleans, etc. — are not allowed.
let user31 = {};
let comment31 = {};

let mapSetting3 = new WeakMap();
mapSetting3.set( user31, "user" );
mapSetting3.set( comment31, "comment" );

console.log(mapSetting3.get(user31));
console.log(mapSetting3.get(comment31));
// mapSetting3.set( "user31", "user" ); //  Invalid value used as weak map key - Primitive data types are not allowed


console.log("\n");

// Working With WeakMaps
// All available methods on a WeakMap require access to an object used as a key.

let user51 = {};

let mapSettings51 = new WeakMap();
mapSettings51.set( user51, "ES2015" );

console.log( mapSettings51.get(user51) );  // ES2015
console.log( mapSettings51.has(user51) ); //true
console.log( mapSettings51.delete(user51) ); //true

// WeakMaps are not iterable, therefore they can’t be used with for...of
/*for ( let [key, value] of mapSettings51) {
    console.log(`${key} = ${value}`); // > mapSettings[Symbol.iterator] is not a function
}*/



// WeakMaps Are Better With Memory
// Individual entries in a WeakMap can be garbage collected while the WeakMap itself still exists.























let cssInConsole = "%c%s";
let outputInConsole = "color: black; font: 1.4rem/1 Tahoma;";

// Set

// Limitations With Arrays
// Arrays don’t enforce uniqueness of items. Duplicate entries are allowed.
let expmlArrLimit = [];

expmlArrLimit.push("JavaScript");
expmlArrLimit.push("Web");
expmlArrLimit.push("Web");
expmlArrLimit.push("Web");

console.log(expmlArrLimit.length);



console.log("\n");


// Using Set
// The Set object stores unique values of any type, whether primitive values or object references.

let tags = new Set();

tags.add("JavaScript");
tags.add("Programming");
tags.add({ version: "2014" });
tags.add("Web");
tags.add("Web");

console.log(tags.size);


console.log("\n");

// Using Set as Enumerable Object
// Set objects are iterable, which means they can be used with for...of and destructuring.
for ( let tag of tags ) {
    console.log(tag);
}

console.log("\n");

let [a,b,c,d] = tags;
console.log(a,b,c,d); // Effectively extracting elements via destructuring

console.log("\n");

// WeakSet
// The WeakSet is a type of Set where only objects are allowed to be stored.
let weakTag = new WeakSet();

// weakTags.add("JavaScript"); - TypeError: Invalid value used in weak set - Only objects can be added
weakTag.add({ name: "Js" });
let iOS = { name: "iOS" };
weakTag.add(iOS);

console.log(weakTag.has(iOS));
console.log(weakTag.delete(iOS));

// WeakSets don't prevent the garbage collector from collecting entries that are no longer used in other parts of the system


// Can’t Read From a WeakSet
// WeakSets cannot be used with for...of and they offer no methods for reading values from it.

/*
for(let wt of weakTags){ -- Not iterable!
 console.log(wt); // TypeError weakTags[Symbol.iterator] is not a function
}
*/






// If we can’t read values from a WeakSet, when should we use them ?

// Using WeakSets to Show Unread Posts
// We want to add a different background color to posts that have not yet been read.

// Showing Unread Posts With WeakSets
// We can use WeakSets to create special groups from existing objects without mutating them. Favoring immutable objects allows for much simpler code with no unexpected side effects.


/*
let readPosts = new WeakSet();
//...when post is clicked on
postList.addEventListener('click', (event) => {
//....
    readPosts.add(post); -- Adds object to a group of read posts
});
// ...rendering posts
for(let post of postArray){
    if(!readPosts.has(post)){ -- The has() method checks whether an object is present in the WeakSet
        _addNewPostClass(post.element);
    }
}
*/









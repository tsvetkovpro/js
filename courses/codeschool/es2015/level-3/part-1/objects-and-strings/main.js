var sp = function() {
    console.log("\n");
};



// The Object Initializer Shorthand
// We can remove duplicate variable names from object properties when those properties have the same name as the variables being assigned to them.

function buildUser(first, last) {
    let fullName = first + " " + last;
    return {first, last, fullName};
}

let user = buildUser("Ivan", "Petrov");

console.log(user.first);
console.log(user.last);
console.log(user.fullName);


sp();

// Assigning With Object Initializer Shorthand
// The object initializer shorthand works anywhere a new object is returned, not just from functions.

let name1 = "Sam";
let age1 = 33;
let friends1 = ["brook", "tyler"];

let user1 = {name1, age1, friends1}; // same thing => let user = { name: name, age: age, friends: friends };

console.log(user1.name1);
console.log(user1.age1);
console.log(user1.friends1);

sp();

// the right way
// Object Destructuring
// We can use shorthand to assign properties from objects to local variables with the same name.

let {first, last, fullName} = buildUser("User1", "LastName");

console.log(first);
console.log(last);
console.log(fullName);






// Recap Object Initializer vs. Destructuring

// Object Initializer Shorthand Syntax
let name2 = "Sam";
let age2 = 44;
// From variables to object properties
let user2 = {name2, age2};
sp();
console.log(user2.name2);
console.log(user2.age2);


sp();
// Object Destructuring
let {first2, last2, fullName2} = buildUser("test1", "test1"); // From object properties to variables

console.log(first2); // undefined
console.log(last2); // undefined
console.log(fullName2); // undefined




sp();
//В стандарте ECMAScript 2015 переменные, объявленный оператором let, переносятся наверх блока. Но если вы сошлетесь в блоке на переменную, до того как она будет объявлена оператором let, то это приведет к выбросу исключения ReferenceError, потому что переменная находится во "временной мертвой зоне" с начала блока и до момента ее объявления.

function buildUser3(first, last) {
    let fullName123 = first + " " + last;
    return [first123, last123, fullName123];
}

let [first123, last123, fullName123] = buildUser3("User1", "LT USer1");
console.log(first123,last123,fullName123);

let [first2123, last2123, fullName2123] = buildUser3("User2", "LT USer2");
console.log(first2123, last2123, fullName2123);



// Adding a Function to an Object
// Using the Method Initializer Shorthand
// A new shorthand notation is available for adding a method to an object where the keyword function is no longer necessary.


/*
function buildUser2 (first, last, postCount) {
    let fullNameMy = first + " " + last;
    const ACTIVE_POST_COUNT = 10;

    return {
        firstMy,
        lastMy,
        fullNameMy,
        isActive(){
            return postCount >= ACTIVE_POST_COUNT;
        }
    }
}

let {firstMy, lastMy, fullNameMy} = buildUser2("test2", "test2");

console.log(firstMy);
console.log(lastMy);
console.log(fullNameMy);*/




// Writing Multi-line Strings
// Template strings offer a new — and much better — way to write multi-line strings.

let userName = "Sam";
let admin = {fullNa: "Alex Williams"};

let veryLongText = `Hi ${userName},

this is very


veryy

long text.


Regards, ${admin.fullNa}
`;
sp();
console.log(veryLongText);




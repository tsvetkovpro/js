// existing javascript functions

/*
 alert() - sends a message to the user in a small pop-up window
 confirm() - asks user for consent to move forward with an action ok - true, cancel - false
 prompt() - sends a message and retrieves an entry from the user
*/

var userName = prompt("Yo name?");
console.log(userName);

var q = confirm("Are you sure your name is " + userName + "?");
if (q) {
    console.log("1 " + q);
} else {
    console.log("2 " + q);
}


// using the typeof operator
/*
typeof true - "boolean"
typeof "Ss1" - "string"
typeof 42 - "number"
typeof undefined - "undefined"
typeof null - "object"
*/

var Name = prompt("YO1");
console.log(typeof(Name)) // yes - string; no - object


// a confirmation loop

var gotName = false;
while (gotName == false) {
    var userName = prompt("Yo man! What's your name?");
    if ( confirm("Are you sure " + userName + "?") ) {
        alert("'Sup " + userName + "!");
        gotName = true;
    }
}






















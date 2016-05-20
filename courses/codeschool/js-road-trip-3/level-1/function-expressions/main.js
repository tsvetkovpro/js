/*
 function diffOfSquares (a, b) {
   return a*a - b*b;
 }
 - building in memory immediately when the program loads
* */

// functions on the fly
var diff = function diffOfSquares (a, b) {
  return a*a - b*b;
};
console.log(diff(9,5));


// anonymous functions
var diff2 = function (a, b) {
    return a*a - b*b;
};
console.log(diff2(4,2));
console.log(diff2);


//multiple greeting
var greeting;
var newCustomer = false;
if (newCustomer) {
    greeting = function () {
        alert("Thanks for visiting the Badlands!\n" +
        "We hope your stay is ... better than most.");
    };
} else {
    greeting = function () {
        alert("Welcome back to the Badlands!\n" +
        "Guess they aren't so bad huh?");
    };
}
closeTerminal(greeting);
function closeTerminal (message) {
    message();
}












































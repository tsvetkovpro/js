//“Hoisting” WITHin a JAVASCRIPT SCOPE

function sumOfSquares (a, b) {
    var x = add(a*a, b*b);
    return x;

    function add (c, d) {
        var a = c + d;
        return a;
    }
}
/*
 but JavaScript loads it like this:
   function sumOfSquares(a, b) {
    var x = undefined;
    function add(c, d) {
        var a = c + d;
        return a;
    }

    x = add(a * a, b * b);
    return x;
}*/

var a5 = sumOfSquares(5, 5);
console.log(a5);
console.log(typeof a5);


// Coding Carefully for smooth execution
function getMysteryNumber() {
    function chooseMystery() {
        return 12;
    }

    return chooseMystery();

    function chooseMystery() {
        return 7;
    }
}
console.log(getMysteryNumber()); // 7




function getMysteryNumber2() {
    var chooseMystery = function() {
        return 12;
    }

    return chooseMystery();

    var chooseMystery = function() {
        return 7;
    }
}
console.log(getMysteryNumber2()); // 12




function getMysteryNumber3(){
    return chooseMystery();

    var chooseMystery = function() {
        return 12;
    }
    var chooseMystery = function() {
        return 7;
    }
}
/*console.log(getMysteryNumber3()); // error*/


function capacityStatus (numPassengers, capacity) {
    if (numPassengers = capacity) {
        noSeats();
    } else {
        seatsAvail();
    }
    var noSeats = function(){
        alert("No seats left!");
        return false;
    }
    var seatsAvail = function () {
        alert("There are " + (capacity - numPassengers) + " seats left!");
        return true;
    }
}
/*console.log(capacityStatus(60, 60));// error*/

// fix two way:
// 1
function capacityStatus2 (numPassengers, capacity) {
    var noSeats = function(){
        alert("No seats left!");
        return false;
    }
    var seatsAvail = function () {
        alert("There are " + (capacity - numPassengers) + " seats left!");
        return true;
    }
    if (numPassengers == capacity) {
        noSeats();
    } else {
        seatsAvail();
    }
}
console.log(capacityStatus2(30, 60));


// 2
function capacityStatus3(numPassengers, capacity) {
    if (numPassengers == capacity) {
        noSeats();
    } else {
        seatsAvail();
    }

    function noSeats() {
        alert("No seats left!");
        return false;
    }

    function seatsAvail() {
        alert("There are " + (capacity - numPassengers) + " seats left!");
        return true;
    }
}
console.log(capacityStatus3(20, 60));















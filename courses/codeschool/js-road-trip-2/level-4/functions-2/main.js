// now for a more complex function!

function countE () {
    var phrase = prompt("Which phrase would you like to examine?");
    if ( typeof(phrase) != "string") {
        alert("That's not a valid entry!");
        return false;
    } else {
        var eCount = 0;
        for (var index = 0; index < phrase.length; index++) {
            if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E') {
                eCount++;
            }
        }
        alert("There are " + eCount + " E's in \"" + phrase + "\".");
        return true;
    }
}

countE();




// Understanding local and global scope
var x = 6;
var y = 4;

function add (a, b) {
    var x = a + b;
    return x;
}

function subtract (a, b) {
    y = a - b;
    return y;
}

console.log(subtract(1,2));
console.log(add(1,2));


// functions create a new scope
// variables declared in a function STAY in the function

var x1 = 6;
function add1 (a, b) {
    var x1 = a + b;
    return x1;
}
console.log("\n");
console.log(add1(9,2));
console.log(x1);

//warning!)

var x2 = 6;
function add2 (a, b) {
    x2 = a + b;
    return x2;
}
console.log("\n");
console.log(add2(9,2));     //11
console.log(x2);            //11












































// functions in javascript code

function sumOfCubes (a, b) {
    var aCubed = a*a*a;
    var bCubed = b*b*b;
    var sum = aCubed + bCubed;
    return sum;
}
console.log(sumOfCubes(4,9));


var mySum = sumOfCubes(5,6);
console.log("\n");
console.log(mySum);


//writing efficient functions
function sumOfCubes2 (a, b) {
    var aCubed = a*a*a;
    var bCubed = b*b*b;
    return aCubed + bCubed;
}
console.log(sumOfCubes2(4,9));


function sumOfCubes3 (a, b) {
    var aCubed = a*a*a;
    return aCubed + b*b*b;
}
console.log(sumOfCubes3(4,9));


function sumOfCubes4 (a, b) {
    return a*a*a + b*b*b;
}
console.log(sumOfCubes4(4,9));


console.log("\n");
console.log(sumOfCubes4(1+2,3+5));

var x = 3;
console.log("\n");
console.log(sumOfCubes4(x*2, x*4));

console.log(sumOfCubes4(6, 12));

















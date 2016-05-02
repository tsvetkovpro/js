// the array
// an array is a data structure with automatically indexed positions

// building and accessing arrays
var passengers = ["1", "2", "3", "4", "5", "6"];
console.log(passengers[5]);


// changing array contents
passengers[2] = "33";
console.log(passengers[2]);
console.log("\n");
console.log(passengers);
console.log(passengers.length);


// the pop() function - will automatically "pop" the last existing cell off the array while returning that cell's contents
passengers.pop();
console.log("\n");
console.log(passengers);
console.log(passengers.length);


// the push() function - will push a cell onto the back of the array and automatically increase the array length
passengers.push("06");
console.log("\n");
console.log(passengers);
console.log(passengers.length);


// array ca hold: string, values, variables, other array, and combinations of them all!

var comboArray1 = ["One", "fish", 2, "fish"];
console.log("\n");
console.log(comboArray1);
console.log(comboArray1.length);

var poisson = "fish";
var comboArray2 = ["Red", "fish", poisson, poisson];
console.log("\n");
console.log(comboArray2);
console.log(comboArray2.length);


var arrayOfArrays = [comboArray1, comboArray2];
console.log("\n");
console.log(arrayOfArrays);
console.log(arrayOfArrays.length);

console.log("\n");
console.log(arrayOfArrays[1]);

console.log("\n");
console.log(arrayOfArrays[0][2]);


console.log("\n");
console.log(arrayOfArrays[1][1]);




























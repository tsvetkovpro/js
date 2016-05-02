//if, and her buddy, else

/*if ( *some condition is true* ) {
    * do this code *
} else {
    * OTHERWISE, do this code instead! *
}*/

var value1 = 43;
var value2 = 9;
if (value1 < value2) {
    console.log(value1 + " is less than " + value2);
} else {
    console.log(value1 + " is greater than or equal to " + value2);
}

console.log("\n");

// looping with If and else controls
var totalTrains = 12;
var Operationaltrains = 8;

for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
    if (trainNumber <= Operationaltrains) {
        console.log("Train #" + trainNumber + " is running");
    } else {
        console.log("Train #" + trainNumber + " is not operational");
    }
}
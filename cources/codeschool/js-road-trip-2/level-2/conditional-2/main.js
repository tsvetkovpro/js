// the else-if syntax
// when two conditions just isn't enough!

var totalTrains = 12;
var Operationaltrains = 8;

for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
    if (trainNumber <= Operationaltrains) {
        console.log("Train #" + trainNumber + " is running");
    } else if (trainNumber == 10) {
        console.log("Train #" + trainNumber + " is special");
    } else {
        console.log("Train #" + trainNumber + " is not operational");
    }
}


// nested conditionals
/*
if ( *it's a square* ) {
    if ( *it's big* ) {
        *make it red*
    } else {
        *it's must be a small square, so make it blue!*
    }
} else {
    * circle *
}
*/


console.log("\n");

//splitting results for a single condition

var totalT = 12;
var trainsO = 0;

if ( trainsO > 0 ) {
    if (trainsO == totalT) {
        console.log("All trains are running");
    } else {
        for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
            if (trainNumber <= trainsO) {
                console.log("Train #" + trainNumber + " is running");
            } else if (trainNumber == 10) {
                console.log("Train #" + trainNumber + " is special");
            } else {
                console.log("Train #" + trainNumber + " is not operational");
            }
        }
    }
} else {
    console.log("No trains are operational today!");
}






















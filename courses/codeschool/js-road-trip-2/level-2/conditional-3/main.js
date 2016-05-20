// adding a second condition

// complex conditionals

/*
&& - binary 'And' - true if BOTH values are true
> true && false - false, > true && true - true, > false && false - false,

|| - binary 'Or' - returns true if EITHER value is true
 > false || true - true, > false || false - false, > true || true - true,
*/


// adding to our list of special trains

var dayOfWeek = "Sunday";
var totalTrains = 12;
var OperationalTrains = 8;

for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
    if (trainNumber <= OperationalTrains && trainNumber != 3) {
        console.log("Train #" + trainNumber + " is running");
    } else if (trainNumber == 10 || trainNumber == 12) {
        console.log("Train #" + trainNumber + " will begin running at noon");
    } else if ( trainNumber == 3 && dayOfWeek == "Sunday" ) {
        console.log("Train #3 is running");
    } else {
        console.log("Train #" + trainNumber + " is not operational");
    }
}

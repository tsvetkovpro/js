//the for-loop
// for ( *start with this* ; *loop if this expression is true* ; *do this after each loop* ) {}

for (var number = 5; number > 0; number--) {
    console.log(number);
}

var trainOperational = 0;
for (var trainNumber = 12; trainNumber > trainOperational; trainNumber--) {
    console.log("Train # " + trainNumber + " is running");
}

console.log('\n');

//use the for loop to list the non-operational trains
var trainsO = 8;
var totalT = 12;
for (var stoppedTrain = trainsO + 1; stoppedTrain <= totalT; stoppedTrain++) {
    console.log("Train # " + stoppedTrain + " is running");
}

console.log('\n');

var myTotalTrains = 12;
var myTrainsOperational = 8;

var myTrainNumber = 1;
while(myTrainNumber <= myTrainsOperational){
    console.log("Train # " + myTrainNumber + " is running");
    myTrainNumber++;
}

for(var myStoppedTrain = myTrainsOperational +1; myStoppedTrain <= myTotalTrains; myStoppedTrain++){
    console.log("Train # " + myStoppedTrain + " is not operational");
}




















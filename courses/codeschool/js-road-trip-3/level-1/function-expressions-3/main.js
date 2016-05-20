var sweetAnnouncement = function () {
    alert("Attention!\n CUPCAKES.\n\n... THAT IS ALL.");
};
/*sweetAnnouncement();*/


var fruits = ["Apple", "Mango", "Orange", "Pomegranate"];
var fruitJuice = fruits.map(function (fruit) { return "\n" + fruit + " juice"; });
/*alert(fruitJuice);*/


// a ticket system for the forest theme park
var parkRides = [ ["Birch Bumpers", 40], ["Pines Plunge", 55], ["Cedar Coaster", 20], ["Ferris Wheel", 90] ];
var fastPassQueue = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];
var wantsRide = "Pines Plunge";
/*var ticket = buildTicket(parkRides, fastPassQueue, wantsRide);
ticket();*/
buildTicket(parkRides, fastPassQueue, wantsRide)(); // now we've fiven our expression some parameter parentheses. We're on the right track!


/*console.log(fastPassQueue.shift()); //shift method will return the cell that it removes from the front of the array
var firstFastPass = fastPassQueue.shift();
console.log(firstFastPass);*/

function buildTicket ( allRides, passRides, pick ) {
    if (passRides[0] == pick) {
        var pass = passRides.shift();
        return function (){alert("Quick! You've got a Fast Pass to " + pass + "!");
        };
    } else {
        for(var i = 0; i<allRides.length; i++){
            if(allRides[i][0] == pick) {
                return function () {alert("A ticket is printing for " + pick + "!\n" +
                "Your wait time is about " + allRides[i][1] + " minutes.");
                };
            }
        }
    }
}



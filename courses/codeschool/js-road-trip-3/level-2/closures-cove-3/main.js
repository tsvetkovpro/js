//LOOPS WITH CLOSURES: a cautionary tale

// !! CLOSURES BIND VALUES AT THE VERY LAST MOMENT
// We have to pay close attention to return times and final variable states
/*
function assignTorpedo (name, passengerArray ) {
    var torpedoAssignment;
    for (var i = 0; i<passengerArray.length; i++) {
        if (passengerArray[i] == name) {
            torpedoAssignment = function () {
                alert("Ahoy, " + name + "!\n" +
                        "Man your post at Torpedo# " + (i+1) + "!");
            };
        }
    }
    return torpedoAssignment;
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3P0", "Boba"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);
console.log(giveAssignment());*/


//right way 1
function assignTorpedo (name, passengerArray ) {
    for (var i = 0; i<passengerArray.length; i++) {
        if (passengerArray[i] == name) {
            return function () {
                alert("Ahoy, " + name + "!\n" +
                    "Man your post at Torpedo# " + (i+1) + "!");
            };
        }
    }
}
var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3P0", "Boba"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);
console.log(giveAssignment());


//right way 2
function makeTorpedoAssigner (passengerArray) {
    return function (name) {
        for (var i = 0; i < passengerArray.length; i++) {
            if (passengerArray[i] == name) {
                alert("Ahoy, " + name + "!\n" +
                    "Man your post at Torpedo #" + (i + 1) + "!");
            }
        }
    };
}
var subPassengers1 = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];
var getTorpedoFor = makeTorpedoAssigner(subPassengers1);
getTorpedoFor("R2-D2");


















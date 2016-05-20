//adding a passenger tracker

function buildCoveTicketMaker ( transport ) {
    var passengerNumber = 0;
    return function ( name ) {
        passengerNumber++;
        alert("Here is your transportation ticket via the " + transport + ".\n" +
                "Welcome to the Cold Closures Cove, " + name + "!\n" +
                "You are passenger #" + passengerNumber + ".");
    }
}
var getSubmarineTicket = buildCoveTicketMaker("Submarine");
getSubmarineTicket("Mario");
getSubmarineTicket("Luidge");

var getBattleshipTicket = buildCoveTicketMaker("Battleship");
getBattleshipTicket("Mario");
getBattleshipTicket("Luidge");























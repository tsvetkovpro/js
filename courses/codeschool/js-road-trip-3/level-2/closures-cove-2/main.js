function testClosure () {
    var x = 4;
    return x;
}
console.log(testClosure()); console.log(typeof testClosure()); console.log(typeof x);


function testClosure2() {
    var x2 = 4;
    function closeX() { return x2; }
}
console.log(testClosure2()); console.log(typeof testClosure2()); console.log(typeof x);


function testClosure3(){
    var x3 = 4;
    function closeX(){
        return x3;
    }
    return closeX;
}
var checkLocalX = testClosure3();
console.log(checkLocalX()); console.log(typeof checkLocalX()); //4, number


// Closures help in function “construction zones”
function buildCoveTicketMaker( transport ) {
    return function ( name ) {
        alert("Here is your transportation ticket via the " + transport + ".\n" +
                "Welcome to the Cold Closures Cove, " + name + "!");
    }
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
var getBattleshipTicket = buildCoveTicketMaker("Battleship");
var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");

console.log(getSubmarineTicket("Mario"));
console.log(getBattleshipTicket("Luigi"));
console.log(getGiantSeagullTicket("Bowser"));


/*

 функция buildCoveTicketMaker - возвращает функцию принимающую один параметр name.

 return function ( name ) {
 alert("Here is your transportation ticket via the " + transport + ".\n" +
 "Welcome to the Cold Closures Cove, " + name + "!");
 }
 И следующее выражение

 var getSubmarineTicket = buildCoveTicketMaker("Submarine");
 Становится эквивалентным

 var getSubmarineTicket = function ( name ) {
 alert("Here is your transportation ticket via the " + "Submarine" + ".\n" +
 "Welcome to the Cold Closures Cove, " + name + "!");
 }
 Таким образом, вызывая полученную функцию с параметром "Mario", параметр name имеет значение "Mario".

* */





























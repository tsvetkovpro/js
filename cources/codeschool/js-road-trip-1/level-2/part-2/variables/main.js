function msg(message) {
    return console.log(message);
}

function sp(arg) {
    return console.log(arg);
}

//variables store strings
var welcome = "welcome to the javascript world!";
var safe = "to be safed";
msg(welcome + "\n" + safe);


//using variable names with strings
var longString = "I wouldn't want to retype this String every time.";
console.log(longString.length);


//more comparisons with variables
var longWordOne = "qqqqqqqqqqqqqqqqqqqqqqqqq";
var longWordTwo = "qqqqqqqqqqqqqqqqqqqqqqqqqqqwwwwwwwwwwwwww";
console.log(longWordOne.length > longWordTwo.length);

//finding specific characters within strings
var sen = "Ababa fafa         fafaf       fafa";
console.log(sen.length);

console.log(sen.charAt(11));
console.log(sen.charAt(0));
console.log(sen.charAt(34));


//variables help organize data
var trainO = 8;
var totalT = 12;
var operatingS = " trains are operational today.";

msg(trainO + " out of " + totalT + operatingS);



















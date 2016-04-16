function msg(message) {
    return console.log(message);
}

function sp(arg) {
    return console.log(arg);
}

var trainWhistles = 3;
sp('\n');
msg(trainWhistles);


//want to change a variable's value? it's your lucky day!
trainWhistles = 9;
sp('\n');
msg(trainWhistles);

trainWhistles = trainWhistles + 3;
sp('\n');
msg(trainWhistles);

trainWhistles += 3; //same things
sp('\n');
msg(trainWhistles);

trainWhistles *= 3;
sp('\n');
msg(trainWhistles);


//using variables
trainWhistles = 3;
msg("All of you train have " + trainWhistles + " whistles");
msg("But the pollack 9000 has " + (trainWhistles * 3) + "!");

trainWhistles = 3;
var polack9000 = trainWhistles * 3;
sp('\n');
msg(polack9000);
msg("But the pollack 9000 has " + polack9000 + "!");


//incrementing and decrementing
trainWhistles = 3;
trainWhistles++;
msg(trainWhistles);

trainWhistles = 3;
trainWhistles--;
msg(trainWhistles);





















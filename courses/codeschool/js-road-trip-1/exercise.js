//show space on console.log
function showSpace() {
	var message = '\n';
	console.log(message);
}


//js roadtrip 1
//1. the city of value
//1.1 booleans, the true path

//In the console, enter any expression which uses +, -, *, or /, and whose answer evaluates to 36
var sum = 6 * 6;
console.log(sum);
showSpace();

//Enter one expression that satisfies all of the following criteria:
// The answer evaluates to 14.
// The expression contains at least 3 different values.
// The expression contains exactly 1 set of parentheses.
var sum2 = (2*1)+12;
console.log(sum2);
showSpace();

//Using the modulus operator %, enter an expression with exactly two values that results in a remainder of 4.
var sum3 = 20%8
console.log(sum3);
showSpace();

//Write a Boolean expression that tests whether two numbers are equal, and whose answer evaluates to false
console.log(3 == 2);
showSpace();

//Write a Boolean expression that tests whether two numbers are not equal, and whose answer evaluates to true.
console.log(3 != 2);
showSpace();


//1.2 strings on signs

//Create a String of your first and last name, with the first letter of each word capitalized, and each word separated by a space.
console.log('Name LastName');
showSpace();

//Build the following output in one String, using special characters for the newline, tab stop, and quotation marks:
console.log("Quoth the raven:\n\t\"Nevermore!\"");
showSpace();


//Build a Boolean expression that compares two Strings and evaluates to true.
console.log('ab' == 'ab');
showSpace();

//Use the + operator to concatenate the following words and numbers. All values need to be separated by a space:
// "eight"
// 5
// "six"
// "two"
// 3
// 7
console.log("eight " + 5 + " six " + "two " + 3 + " " + 7);
showSpace();

//Accessing a String's Length
//Create a String with exactly 33 characters. Then, access the length of your String with the .length property.
var x = "asasasasasasasasasasasasasasassss";
console.log(x.length);
showSpace();






//2. Variable Valley
//1.1 Variable Discovery

//Variable I
//Declare a variable whose name is age and assign your own age to it using a numerical value
var x = 10;
console.log(x);
showSpace();

//Variable II
//On line 2, declare a second variable called ageIn5Years and assign the following expression to it: age + 5
var age = 10;
var age5 = age + 5;
console.log(age5);
showSpace();


//1.2 Variable Exploration

//Variable III
//Declare a variable called firstName and store your first name inside it.
var firstName = "Name";
console.log(firstName);
showSpace();

//Now declare a variable called lastName and store your last name inside it.
var lastName = "lastName";
console.log(lastName);
showSpace();

// Variable Concatenation
// Using your firstName and lastName variables, make a variable called fullName that unites your first and last names into one String.
var fullName = firstName + lastName;
console.log(fullName);
showSpace();

// Complex Variable
// Use one line of code to declare a variable called index14 and assign to it the character at index 14 in this string:
// "What can we do? Keep going!"
// Try to use the charAt method on the string with something like this: "example string".charAt(index). Or you can assign the correct character to the variable by counting manually.
var index14 = "?";
console.log(index14);
showSpace();

// Length
// This sentence has been assigned to a variable. Find its length without manually counting any characters or spaces
var sentence = "|||||||||||||||   ";
console.log(sentence.length);
showSpace();

// Train Passengers
// Let’s say we start with an empty train at Death Valley National Park station. When the trains open for the day, 3 people get on board.
// Declare a variable called numPassengers and set its value to 0. Then, increment the variable by 3, but without using the variable’s name twice in the new statement.
var numPassengers = 0;
numPassengers +=2;
console.log(numPassengers);
showSpace();

// Train Passengers
// When these folks get on board, the new passenger count is reported to the conductor. Build a String called countMessage that uses numPassengers to say:
// Attention: There are now 3 passengers on the train!
var countMessage = "Attention: There are now " + numPassengers + " passengers on the train!";
console.log(countMessage);
showSpace();

var trainCapacity = 60;
var occupancy = (numPassengers) + " passengers present, with " + (trainCapacity-numPassengers) + " seats remaining."
console.log(occupancy);
showSpace();

// Sum
// On one line of code, declare the variable twenty20 and assign to it 3 + 10 + 7
var twenty20 = 3+10+7;
console.log(twenty20);
showSpace();

// String Concatenation
// Use the same twenty20 variable, but change your variable’s contents by reassigning it to the concatenation of the following characters:
// The character at index 0 in "Never look back."
// The character at index 3 in "Adventure is out there."
// The character at index 14 in "Just keep swimming."
// The character at index 1 in "To infinity... and beyond!"
// Execute this concatenation in one line without declaring any extra variables. You can use a method to find the characters, or count very carefully.
twenty20 = "Never look back.".charAt(0)+"Never look back.".charAt(1)
console.log(twenty20);
showSpace();


//
var eruption1 = 112;
var eruption2 = 148;
var eruption3 = 160;
var numEruptions = 3;
var avg
avg = (eruption1 + eruption2 + eruption3) / numEruptions;
console.log("Average eruption height today: " + avg);
showSpace();
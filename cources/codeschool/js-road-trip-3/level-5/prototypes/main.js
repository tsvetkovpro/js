// Adding inheritable Properties to prototypes
var witch = "I’ll get you, my pretty...and your little dog, too!";
var scarecrow = "Well, some people without brains do an awful lot of talking don’t they?"
var dorothy = "There’s no place like home.";
var glinda = "Be gone! Before someone drops a house on you!";
var lion = "Come on, get up and fight, you shivering junkyard!";
var wizard = "Do not arouse the wrath of the great and powerful Oz!";
var tinman = "Now I know I have a heart, because it’s breaking.";

String.prototype.countAll = function (letter) {
    var letterCount = 0;
    for(var i = 0; i<this.length; i++) {
        if (this.charAt(i).toUpperCase() == letter.toUpperCase() ) {
            letterCount++;
        }
    }
    return letterCount;
};

console.log(witch.countAll("I"));
console.log(scarecrow.countAll("o"));
console.log(dorothy.countAll("E"));
console.log(glinda.countAll(" "));
console.log(lion.countAll(","));



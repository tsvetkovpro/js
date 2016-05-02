// A second way to build objects USING Object.create()

var shoe = { size: 6, gender: "women", construction: "slipper"};
console.log(shoe);
console.log(shoe.size);
console.log(shoe["gender"]);

var magicShoe = Object.create(shoe);
console.log(magicShoe);

magicShoe.jewels = "ruby";
magicShoe.travelAction = "click here";
magicShoe.actionsRequired = 3;
console.log(magicShoe);


// What if there were other kinds of shoes?
var shoe1 = {size: undefined, gender: undefined, construction: undefined};

var mensBoot = Object.create(shoe1);
mensBoot.size = 12;
mensBoot.gender = "men";
mensBoot.construction = "boot";
console.log(mensBoot);

var flipFlop = Object.create(shoe1);
flipFlop.size = 5;
flipFlop.gender = "women";
flipFlop.construction = "flipflop";
console.log(flipFlop);
// sucks method


// right way

// Building a constructor function for a shoe Object
// A constructor allows us to set up inheritance while also assigning specific property values.

function Shoe (shoeSize, shoeColor, forGender, constructStyle) {
    this.size = shoeSize; // The  this keyword inside a constructor will automatically refer to the new instance of the class that is being made.
    this.color = shoeColor;
    this.gender = forGender;
    this.construction = constructStyle;
    this.putOn = function () { alert("Shoe's on!"); };
    this.takeOff = function () { alert("Uh, what's that smell?"); };
}

var beachShoe = new Shoe(10, "blue", "women", "flipflop");
console.log(beachShoe);
beachShoe.putOn();


// Assigning a prototype TO a constructor
// By setting a constructor’s prototype property, every new instance will refer to it for extra properties!

function Shoe1 (shoeSize, shoeColor, forGender, constructStyle) {
    this.size = shoeSize; // The  this keyword inside a constructor will automatically refer to the new instance of the class that is being made.
    this.color = shoeColor;
    this.gender = forGender;
    this.construction = constructStyle;
}
Shoe1.prototype = {
    putOn: function () { alert("Shoe's on!"); },
    takeOff: function () { alert("Uh, what's that smell?"); }
};

var beachShoe1 = new Shoe1(10, "blueEEEE", "women", "flipflop");
console.log(beachShoe1);
beachShoe1.putOn();
beachShoe1.takeOff();



// Prototypes can also refer back to the instance!
// We can modify the message functions in our prototype to use the data values in the calling instance.

function Shoe2 (shoeSize, shoeColor, forGender, constructStyle) {
    this.size = shoeSize; // The  this keyword inside a constructor will automatically refer to the new instance of the class that is being made.
    this.color = shoeColor;
    this.gender = forGender;
    this.construction = constructStyle;
}
Shoe2.prototype = {
    putOn: function () { alert("Your "+ this.construction + "'s" + " on!"); },
    takeOff: function () { alert("Phew! Somebody's size " + this.size + "'s" +
                                    " are fragrant! "); }
};

var beachShoe2 = new Shoe2(10, "blueEEEE", "women", "flipflop");
console.log(beachShoe1);
beachShoe2.putOn();
beachShoe2.takeOff();




























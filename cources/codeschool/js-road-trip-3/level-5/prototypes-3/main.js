// USEful Properties in the object Prototype
// We’ve seen a few properties inherited from the Object.prototype…let’s test a few more.

var x = 4;
var y = "4";

console.log(x.valueOf());
console.log(typeof x);
console.log(y.valueOf());
console.log(typeof y);

console.log(x.valueOf() == y.valueOf());

console.log(x.valueOf() === y.valueOf());


var a = [3, "blind", "mice"];
console.log(a.valueOf()); // [3, "blind", "mice"]


var b = Number(6);
console.log(b.valueOf()); // 6


// ValueOF( ) on custom objects
// What happens when we call valueOf( ) on an object we make ourselves?
var Tornado = function (category, affectedAreas, windGust) {
    this.category = category;
    this.affectedAreas = affectedAreas;
    this.windGust = windGust;
};

var cities = [ ["Kansas City", 464310], ["Topeka", 127939], ["Lenexa", 49398] ];
var twister = new Tornado( "F5", cities, 220 );
console.log('\n');
console.log(twister.valueOf());
console.log('\n');



// Overriding prototypal properties
// Many situations require special functionality that’s different from the first available property

var Tornado1 = function (category, affectedAreas, windGust) {
    this.category = category;
    this.affectedAreas = affectedAreas;
    this.windGust = windGust;
};

var cities1 = [ ["Kansas City", 464310], ["Topeka", 127939], ["Lenexa", 49398] ];
var twister1 = new Tornado1( "F5", cities1, 220 );
cities1.push(["Olathe,", 130045]);

Tornado1.prototype.valueOf = function () {
    var sum = 0;
    for (var i = 0; i < this.affectedAreas.length; i++) {
        sum += this.affectedAreas[i][1];
    }
    return sum;
};

console.log(twister1.valueOf()); //  771692



// Another USEFUL Prototypal property is toString( )
// Default responses for Object’s toString method are often uninteresting…but overriding it is cool!

var x1 = 4;
var y1 = "4";
console.log(x1.toString()); // 4
console.log(y1.toString()); // 4

var a1 = [3, "blind", "mice"];
console.log(a1.toString()); // 3,blind,mic

var double = function (param) {
    return param * 2;
};
console.log(double.toString()); // function (param) {return param * 2;}



// Let’s override toString( ) in our tornado Prototype
// We want a good representation of the data to come back when we call toString( ) on a Tornado Object

var Tornado2 = function (category, affectedAreas, windGust) {
    this.category = category;
    this.affectedAreas = affectedAreas;
    this.windGust = windGust;
}

var cities2 = [ ["Kansas City", 464310], ["Topeka", 127939], ["Lenexa", 49398] ];
var twister2 = new Tornado2( "F5", cities2, 220 );
cities2.push( ["Olathe", 130045] );

Tornado2.prototype.valueOf = function() {
    var sum = 0;
    for (var i = 0; i < this.affectedAreas.length; i++) {
        sum += this.affectedAreas[i][1];
    }
    return sum;
}

Tornado2.prototype.toString = function () {
    var list = "";
    for (var i = 0; i < this.affectedAreas.length; i++) {
        if (i < this.affectedAreas.length - 1) {
            list = list + this.affectedAreas[i][0] + ", ";
        } else {
            list = list + "and " + this.affectedAreas[i][0];
        }
    }
    return "This tornado has been classified as an " + this.category +
            ", with wind gusts up to " + this.windGust + "mph. Affected areas are: " +
            list + ", potentially affecting a population of " + this.valueOf() +  ".";
};
console.log(twister2.toString()); // This tornado has been classified as an F5, with wind gusts up to 220mph. Affected areas are: Kansas City, Topeka, Lenexa, and Olathe, potentially affecting a population of .


// Finding an object’s constructor and prototype
// Some inherited properties provide ways to find an Object’s nearest prototype ancestor

var cities3 = [ ["Kansas City", 464310], ["Topeka", 127939], ["Lenexa", 49398] ];
var twister3 = new Tornado2( "F5", cities3, 220 );
cities3.push( ["Olathe", 130045] );

console.log(twister3.constructor);
console.log(twister3.constructor.prototype);

console.log(twister3.__proto__);



// HasOwnProperty( ) helps identify property location
// Searching prototype chains for potential overridden properties becomes easy with this function

var Tornado4 = function (category, affectedAreas, windGust) {
    this.category = category;
    this.affectedAreas = affectedAreas;
    this.windGust = windGust;
};

var cities4 = [ ["Kansas City", 464310], ["Topeka", 127939], ["Lenexa", 49398] ];
var twister4 = new Tornado4( "F5", cities4, 220 );
cities4.push( ["Olathe", 130045] );

Object.prototype.findOwnerOfProperty = function (propName) {
    var currentObject = this;
    while (currentObject != null) {
        if(currentObject.hasOwnProperty(propName)) {
            return currentObject;
        } else {
            currentObject = currentObject.__proto__;
        }
    }
    return "No Property found!";
};
console.log(twister4.findOwnerOfProperty("valueOf"));
console.log(twister4.findOwnerOfProperty("ToOz"));



















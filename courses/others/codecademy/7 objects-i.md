###### ...And the good!

```javascript
// We want to count from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz". And if the number is divisible by 5 we're going to print "Buzz".

var FizzBuzz = function () {
    for (var i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);    
    }
}
};

FizzBuzz();
```

###### I have to celebrate you baby

```javascript
var getReview = function (movie) {
    switch (movie) {
        case "Toy Story 2":   
            return "Great story. Mean prospector.";
            break;
        case "Finding Nemo":   
            return "Cool animation, and funny turtles.";
            break;
        case "The Lion King":   
            return "Great songs.";
            break;
        default: 
            return "I don't know"
        
    }
};
```

###### Intro

```javascript
var bob = {};
```

###### Properties

```javascript
var Spencer = {
  age: 22,
  country: "United States"
};

var me = {
    age: 23,
    country: "Mother"
};
```

###### Accessing Properties

```javascript
var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};

var name1 = bob.name;
var age1 = bob.age;

var name2 = susan.name;
var age2 = susan.age;
```

###### Accessing Properties, Part 2

```javascript
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];

var weight = dog["weight"];
var age = dog["age"];
```

###### Another Way to Create

```javascript
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;

var susan1 = {
  name: "Susan Jordan",
  age: 24
};

var susan2 = new Object();

susan2.name = "Susan Jordan";
susan2.age = 24;
```

###### Putting it all together

```javascript
var snoopy = {
    species:  "beagle",
    age: 10
};

var buddy = new Object();

buddy.species = "golden retriever";
buddy.age = 5;
```

###### More Practice Making Objects

```javascript
var bicycle = {
    speed: 0,
    gear: 1,
    frame_material: "carbon fiber"
};
```

###### Function Review

```javascript
// Accepts a number x as input and returns its square
var square = function (x) {
  return x * x;
};

// Write the function multiply below
// It should take two parameters and return the product

var multiply = function (x, y) {
    return x * y;    
};

multiply(0,1);
```

###### So What's a Method?

```javascript
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;

bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.setAge(40);
bob.setAge(20);
```

###### Why Are Methods Important?

```javascript
var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());
```

###### The "this" Keyword

```javascript
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};

var bob = new Object();
bob.age = 30;

bob.setAge = setAge;
  
bob.setAge(50);
```

###### "This" Works for Everyone

```javascript
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};

var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  

var susan = new Object();
susan.age = 25;
susan.setAge = setAge;

susan.setAge(35);
```

###### Make Your Own Method

```javascript
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;

rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};

rectangle.setWidth = function (newWidth) {
    this.width = newWidth;    
};

rectangle.setHeight(6);
rectangle.setWidth(8);
```

###### More Kinds of Methods

```javascript
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};

square.calcArea = function() {
    return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();
```

###### The Object Constructor

```javascript
var bob = new Object();
bob.name = "Bob Smith";

bob.age = 20;
```

###### Custom Constructors

```javascript
function Person(name,age) {
  this.name = name;
  this.age = age;
}

var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);

var george = new Person("George Washington", 275);
```

###### Try it Out!

```javascript
function Cat(age, color) {
  this.age = age;
  this.color = color;
}

function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}
```

###### More Options

```javascript
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);
```

###### Constructors With Methods

```javascript
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
    return this.height * 2 + this.width * 2;
    };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();
```

###### Constructors in Review

```javascript
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

console.log(rabbit1.describeMyself(), rabbit2.describeMyself(), rabbit3.describeMyself());

```

###### Arrays of Objects

```javascript
function Person (name, age) {
    this.name = name;
    this.age = age;
}

var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);

family[3] = new Person("timmy", 6);
```

###### Loop the loop

```javascript
var Person = function (name, age) {
    this.name = name;
    this.age = age;
}

var family = [];

family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);


for(var i = 0; i < family.length; i++) {
    console.log(family[i].name);
}
```

###### Passing Objects into Functions

```javascript
function Person (name, age) {
    this.name = name;
    this.age = age;
}

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

var diff = ageDifference(alice, billy);
```

###### Try it Out!

```javascript
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function (person1, person2) {
    if (person1.age == person2.age) {
        return person1.age;
    } else if (person1.age > person2.age) {
        return person1.age;
    } else {
        return person2.age;    
    }
};

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));
```

###### What Are Objects For?

```javascript
var spencer = {
  age: 22,
  country: "United States"
};

var spencer2 = new Object();
spencer2.age = 22;
spencer2.country = "United States";
```

###### Properties

```javascript
var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

var species = snoopy.species;

var age = snoopy["age"];
```

###### Customizing Constructors

```javascript
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

var the_hobbit = new Book (320 , "J.R.R. Tolkien");
```

###### Methods

```javascript
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };

    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
};
```
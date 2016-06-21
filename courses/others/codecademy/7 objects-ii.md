###### An Objective Review

```javascript
var james = {
    job: "programmer",
    married: false
    
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

var gabby = new Person ("student", true);
```

###### Fun with Functions

```javascript
function someObject() {

  this.someMethod = function() {
  };

}
/*
Suppose we said var someObj = new someObject();. When we call someObj.someMethod(), the code between the curly brackets { } above will run.
*/

function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function() {
        console.log("Hello!");
    }
    
}

var user = new Person("Codecademy Student",false);
user.speak();
```

###### Literally Speaking

```javascript
var someObj = {

aProperty: value,
someMethod: function(some, params) { }

};
/*
When we call someObj.someMethod(some, values);, the code between the curly brackets { } will run.
*/

var james = {
    job: "programmer",
    married: false,
    speak: function( par ) {
        console.log("Hello, I am feeling " + par);
    }
};

james.speak("great");
james.speak("just okay");
```

###### Can I See Your References?

```javascript
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a " + this.job);
    }
};

james.sayJob();

james.job = "super programmer";

james.sayJob();
```

###### Who's in Your Bracket?

```javascript
someObj.propName;
someObj["propName"];
var someObj = {propName: someValue};
var myProperty = "propName";
someObj[myProperty];


var james = {
    job: "programmer",
    married: false
};

var aProperty = "job";

console.log(james[aProperty]);
```

###### I.D., Please

```javascript
// As an example, the following example will print "object":
var someObject = {someProperty: someValue};
console.log( typeof someObject );


var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj );
console.log( typeof aNumber );
console.log( typeof aString );
```

###### Know Thyself

```javascript
var myObj = {
    name: "ivan"
    
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false
```

###### Dressed to Impress

```javascript
var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts')) {
    console.log(suitcase.shorts);    
} else {
    suitcase.shorts = "sasd";    
    console.log(suitcase.shorts);
}
```

###### Getting IN-timate

```javascript
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var prop in nyc) {
    console.log(prop);
}
```

###### List ALL the Properties!

```javascript
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var prop in nyc) {
    console.log(nyc[prop]);
}
```

###### Class is in Session

```javascript
function Person(name,age) {
  this.name = name;
  this.age = age;
}

var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

function Circle(radius) {
    this.radius = radius; 
}
```

###### Teach Snoopy

```javascript
function Dog (breed) {
  this.breed = breed;
}

var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();


var snoopy = new Dog("Beagle");

snoopy.bark = function () {
    console.log("Roof");
};
snoopy.bark();
```

###### How do Classes Help Us?

```javascript
function Person(name,age) {
  this.name = name;
  this.age = age;
}

var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

var me = new Person("ivan", 31);
printPersonName(me);
```

###### Prototype to the Rescue

```javascript
function Dog (breed) {
  this.breed = breed;
};

var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

var snoopy = new Dog("Beagle");
snoopy.bark();
```

###### Prototype Practice

```javascript
function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

Cat.prototype.meow = function () {
    console.log("Meow!");    
};

cheshire.meow();
gary.meow();
```

###### It's All in the Genes

```javascript
function Animal(name, numLegs){
    this.name = name;
    this.numLegs = numLegs;
}

Animal.prototype.sayName = function () {
    console.log("Hi my name is " + this.name);    
};

var penguin = new Animal("Captain Cook", 2);
penguin.sayName();
```

###### Marching Penguins

```javascript
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

Penguin.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();
```

###### DRY Penguins

```javascript
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = 2;
}

Penguin.prototype = new Animal();
```

###### Black (and White) Penguin Magic

```javascript
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = 2;
}

Penguin.prototype = new Animal();

var penguin = new Penguin ("namePg");

penguin.sayName();
```

###### Penguins, Properties, and the Prototype

```javascript
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

function Emperor (name) {
    this.name = name;
}

Emperor.prototype = new Penguin();

var emperor = new Emperor("name...1");

console.log(emperor.numLegs);
```

###### Up the Food-I-mean-Prototype Chain

```javascript
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log( myEmperor.saying ); // should print "Waddle waddle"
console.log( myEmperor.numLegs ); // should print 2
console.log( myEmperor.isAlive ); // should print true
```

###### Open to the Public

```javascript
function Person(first,last,age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}

var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;

var myAge = john.age;
```

###### Private Variables

```javascript
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

var john = new Person("1name", "2last", 33);

console.log(john.bankBalance);
```

###### Accessing Private Variables

```javascript
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

var myBalance = john.getBalance();
console.log(myBalance);
```

###### Private Methods

```javascript
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   this.askTeller = function () {
        return  returnBalance; 
    }
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);

var myBalanceMethod = john.askTeller();

var myBalance = myBalanceMethod();
console.log(myBalance);
```

###### Passing Arguments

```javascript
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);

var myBalance = john.askTeller(1234);
```

###### Looks For-In To Me

```javascript
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

for (var prop in languages) {
    if (typeof languages[prop] == "string") {
       console.log(languages[prop]); 
    }
}
```

###### Hello? Yes, This is Dog

```javascript
function Dog (breed) {
    this.breed = breed;
};

Dog.prototype.sayHello = function () {
  console.log("Hello this is a " + this.breed + " dog" );  
};

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

```

###### So Meta I Can't Take It!

```javascript
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);
```

###### Private Eye

```javascript
function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());
```
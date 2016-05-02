// Creating an object with javascript
// Object Properties will also accept variables

var booksArray = ["Great Expectations", "The Remains of the day", "Peter Pan"];
var myBox = { height: 6, width: 8, length: 10, volume: 480,
                materials: "cardboard",
                contents: booksArray
            };
// Referencing an object’s properties
// We can take a peek at any particular property of an object using the dot operator
console.log(myBox.width);
console.log(myBox.materials);
console.log(myBox.contents);


// Changing property values
// The dot operator also allows modification of properties, even using methods
myBox.width = 12;
console.log(myBox.width);

myBox.volume = myBox.length * myBox.width * myBox.height;
console.log(myBox.volume);
console.log(myBox);


myBox.contents.push("On the road");
console.log(myBox);
console.log(booksArray);


// Adding property values post-creation
myBox.weight = 24;
myBox.destination1 = "Orlando";
myBox.destination2 = "Miami";
console.log(myBox);


// A Second way of accessing Or Creating properties
// We can use brackets on Objects in similar fashion to accessing array indices
console.log(myBox["volume"]);
console.log(myBox["materials"]);
/*An object is like an Array whose
indices can be accessed with strings
(with quotes) instead of numbers.*/

myBox["# of stops"] = 2;
console.log(myBox);  // console.log(myBox."# of stops"); - ERROR! use brackets Luke
console.log(myBox["# of stops"]);


// Brackets enable dynamic property access
// Since brackets take expressions, we can avoid hard-coding every property access
for (var i = 1; i <= myBox["# of stops"]; i++) {
    console.log(myBox["destination" + i]);
}


// Changing our contents to individual objects
// Each book in our ‘contents’ property could be a Book object

delete myBox.contents; // true
delete myBox.nonExistingProperty; // true
console.log(myBox);
console.log(booksArray);

// Changing our contents to individual objects
myBox["# of Books"] = 0;
addBook(myBox, "Great Expectations", "Charles Dickens");
addBook(myBox, "Great Expectations2", "Charles Dickens2");
addBook(myBox, "The Remains of the Day", "Kazuo Ishiguro");
function addBook ( box, name, writer ) {
    box["# of Books"]++;
    box["book" + box["# of Books"]] = {title: name, author: writer};
}
console.log(myBox);


// REFERENCING objects within objects
// Use the dot extension or subsequent bracket notation to get to deeper properties
console.log(myBox.book1.title);

console.log(myBox["book3"]["author"]);

























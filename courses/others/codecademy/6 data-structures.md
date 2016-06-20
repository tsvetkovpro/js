###### You know this!

```javascript
var list = ["1", "2", "3"];
```

###### Access by offset

```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]);
```

###### Array properties

```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]);
console.log(languages.length);
```

###### Iterating over an array

```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for (var i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
```

###### Heterogeneous arrays

```javascript
var myArray = [2, true, "myString", {"one": "1"}];
```

###### Arrays of arrays

```javascript
var newArray = [
    [1,2,3],
    ["one", "two", true],
    ["1", 2,3 ]
];
```

###### Jagged arrays

```javascript
var jagged = [
    [1,2],
    ["1", "2", true,["one"]]
];
```

###### Nouns and verbs together

```javascript
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();
```

###### Object syntax

```javascript
var myObject = {
    key: value,
    key: value,
    key: value
};


var me = {
    name: "myName",
    age: 1
};
```

###### Creating a new object

```javascript
var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};

var emptyObj = {};

var myObj = new Object();



var me = new Object();

me.name = "myName";
me["age"] = 1;
```

###### Practice makes perfect

```javascript
var object1 = {};
var object2 = new Object();
var object3 = {};


object1.name = "name";
object2["age"] = 1;
object3.name = "myName";
```

###### Heterogeneous arrays

```javascript
var myArray = [1, true, "string", {1:2, "name": "myName"}];
```

###### Multidimensional arrays

```javascript
var aList = [ [1, 4, 2], [7] ];

var newArray = [[1,2], ["one", "two", "three", {1:2}]];
```

###### Editing an existing object

```javascript
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  // Add your code here!
  interests: [1,2,3, true]
};
```

###### Creating your own objects

```javascript
var myOwnObject = {
    name: "myName",
    age: 1,
    "buy": "no"
};
```
###### Introducing Functions

```javascript
// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(12);
```


###### Function syntax

```javascript
var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("Nmaer");
```

###### Tying it all together

```javascript
// Nicely written function:
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};

// Badly written function with syntax errors!

var greeting = function (name) {
    console.log(name);
}
greeting("myName");
```

###### Functions, return and if / else

```javascript
// Define quarter here.
function quarter (number) {
   return number / 4; 
}

quarter(48);


if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}
```

###### Functions with two parameters

```javascript
// Write your function starting on line 3

function perimeterBox (length ,width) {
    return length + length + width + width;
}

perimeterBox(2,3);
```

###### Global vs Local Variables

```javascript
var my_number = 7; //this has global scope

var timesTwo = function(number) {
     var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);
```

###### Functions recap

```javascript
var nameString = function ( name ) {
	return "Hi, I am" + " " + name;
};


console.log(nameString("MyNmae"));
```

###### Functions & if / else

```javascript
// Write your function below. 
// Don't forget to call your function!

function sleepCheck (numHours) {
    if (numHours >= 8) {
        return "You're getting plenty of sleep! Maybe even too much!";
    } else if (numHours < 8) {
        return "Get some more shut eye!";
    }
}

console.log(sleepCheck(10));
console.log(sleepCheck(5));
console.log(sleepCheck(8));
```
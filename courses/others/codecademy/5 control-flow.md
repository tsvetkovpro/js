Mid-lesson breather

Well done! Even though we've been focusing on **switch**, we've covered a lot so far. You've:


- Reviewed if/else if/else
- Reviewed for and while
- Learned about the switch statement and how to use it instead of multiple if/elses
- Covered switch syntax
- Written your own switch!




###### If / else

```javascript
if (/* Some condition */) {
    // Do something
} else if (/* Some other condition */) {
    // Do something else
} else {    // Otherwise
    // Do a third thing
}


var isEven = function(number) {
  // Your code goes here!
  if (number % 2 === 0) {
        return true;  
    } else {
     return false;    
    }
};
```

###### If / else if / else

```javascript
var isEven = function(number) {
  // Your code goes here!
  if (number % 2 === 0) {
        return true;  
    } else if (isNaN(number)) {
        return "isn't number";    
    }
};
```

###### Practice with switch

```javascript
var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  // Add your code here!
  default:
    console.log("123");
  
}
```

###### More practice with switch

```javascript
var answer = prompt("Add your question here!");

switch(answer) {
  case '123':
    console.log("123");
    break;
  // Add your code here!
  case '321':
      console.log("321");
      break;
  default:
    console.log("123");
}
```

###### Written your own

```javascript
// Write your code below!

var condition = prompt("Are you sure&? ");

switch (condition) {
    case '1':
        console.log("1");
        break;
    case '2':
        console.log("2");
        break;
    case '3':
        console.log("3");
        break;
    default:
        console.log("def");
}
```

###### logical operators. 

```javascript
var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}
```

###### And

```javascript
true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false


// Declare your variables here!
var hungry = true;
var foodHere = true;

var eat = function() {
  // Add your if/else statement here!
  if (hungry === true && foodHere === true) {
    return true;  
    } else {
        return false;    
    }
};
```

###### Or

```javascript
true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false


// Declare your variables here!
var tired = true;
var bored = false;


var nap = function() {
  // Add your if/else statement here!
  if (tired || bored) {
     return true; 
     } else {return false;}
};
```

###### Not

```javascript
!true;   // => false
!false;  // => true


// Declare your variables here!
var programming = false;

var happy = function() {
  // Add your if/else statement here!
  if (!programming) {
      return true;
      } else {return false;}
};
```
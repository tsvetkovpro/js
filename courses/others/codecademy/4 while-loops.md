###### While we're at it

```javascript
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");
```

###### While syntax

```javascript
while(condition){
    // Do something!
}


var understand = true;

while( understand ){
	console.log("I'm learning while loops!");
	understand = false;
}
```

###### A fellow of infinite loops

```javascript
understand = true;

while(understand){
	console.log("I'm learning while loops!");
	//Change the value of 'understand' here!
	understand = false;
	
}
```

###### Brevity is the soul of programming

```javascript
var bool = true;

while(bool){
    console.log("Less is more!");
    bool = false;
}
```

###### Practice makes perfect

```javascript
var i = 0;
var loop = function(){
	while( i < 3 ){
		//Your code goes here!
		console.log("I'm looping!");
		i += 1;
	}
};

loop();
```

###### Solo flight

```javascript
//Remember to make your condition true outside the loop!
condition = true;
var soloLoop = function(){
  //Your code goes here!
  while (condition){
    console.log("Looped once!" );  
    condition = false;
    }
};

soloLoop();
```

###### When to 'while' and when to 'for'

```javascript
let condition = true;
while(condition){
    console.log("While loop!");
    condition = false;
}

for(let i = 0; i <= 2; i++){
   console.log("for loop!"); 
}
```

###### The 'do' / 'while' loop

```javascript
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);
```

###### To learn it, you gotta 'do' it

```javascript
condition = false;

var getToDaChoppa = function(){
  // Write your do/while loop here!
  do {
console.log("do while loop");
    } while (condition);
};

getToDaChoppa();
```

###### Review

```javascript
// Write your code below!

for (var i = 5; i < 7; i++) {
 console.log("for loop");    
}

condition = true;
while(condition){
     console.log("while loop"); 
     condition = false;
}

condition2 = false;
do {
    console.log("do loop");  
} while(condition2);
```
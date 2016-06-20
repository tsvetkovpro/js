**Conclusion**

You've done an awesome job! Loops are always a little tricky when you first meet them. But they are worth learning because they are really useful.

What now? You have so many useful tricks up your sleeve:

a. if / else statements
b. functions
c. for loops
d. booleans, arrays, variables, etc.




###### First for loop

```javascript
for (var counter = 1; counter < 11; counter++) {
	console.log(counter);
}
```


###### Practice counting down

```javascript
for (var i = 10; i >= 0; i--) {
	console.log(i);
}
```


###### Last practice for loop

```javascript
for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}
```


###### Meet arrays

```javascript
var names = ["Mao","Gandhi","Mandela"];
var sizes = [4, 6, 3, 2, 1, 9];
var mixed = [34, "candy", "blue", 11];

var junk = [ "one", "two", 1, 2 ];
console.log( junk );
```

###### Array positions

```javascript
var junkData = ["Eddie Murphy", 49, "peanuts", 31];
console.log(junkData[3]);
```

###### Loops and arrays I

```javascript
// Let's print out every element of an array using a for loop

var cities = ["Melbourne1", "Amman", "Helsinki", "NYC", "NYC2", "NYC3"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}
```

###### Loops and arrays II

```javascript
// Click on "Stuck? Get a hint!" if you get stuck!

var names = ["name1","name2","name3","name4","name5"];

for (var i = 0; i < names.length; i++) {
    console.log("I know someone called " + names[i]);    
}
```

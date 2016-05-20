// using function expression with arrays and map()

var number = [12, 4, 3, 9, 8, 6, 10, 1];
var result = number.map( function (arrayCell) { return arrayCell * 2; } ); // we build an anonymous function for map's parameter, which takes in the contents of each cell of numbers and returns a doubled value to results

console.log(result);




/*
 var number = [12, 4, 3, 9, 8, 6, 10, 1];
 var result = numbers.map(* some coolFunction goes here *);
 var results = [];
 for(var i = 0; i < numbers.length; i++) {
    results[i] = coolFunction(numbers[i]);
 }

 The array’s  map conveniently
 takes this entire loop format
 and consolidates it to one nice
 line of code.


* */

























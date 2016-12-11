// List of cars
var cars = [
	{ name: 'Aston Martin', country: 'UK' },
	{ name: 'Jaguar', country: 'UK' },
	{ name: 'Porsche', country: 'Germany' },
	{ name: 'Audi', country: 'Germany' },
	{ name: 'BMW', country: 'Germany' },
	{ name: 'Lamborghini', country: 'Italy' },
	{ name: 'Ferrari', country: 'Italy' },
];

// filter out German cars using loop
var german = [];
for (var i = 0; i < cars.length; i++) {
	if (cars.country === 'Germany') {
		german.push(cars[i]);
	}
}





// This works fine, but now, let’s use filter() to do the same job.
// List of cars
	var cars = [
	{ name: 'Aston Martin', country: 'UK' },
	{ name: 'Jaguar', country: 'UK' },
	{ name: 'Porsche', country: 'Germany' },
	{ name: 'Audi', country: 'Germany' },
	{ name: 'BMW', country: 'Germany' },
	{ name: 'Lamborghini', country: 'Italy' },
	{ name: 'Ferrari', country: 'Italy' },
];

// using 'filter'
var german = cars.filter(function(cars) {
	return car.country === 'Germany';
});





// The filter function can also be re-written as:

// List of cars
var cars = [
	{ name: 'Aston Martin', country: 'UK' },
	{ name: 'Jaguar', country: 'UK' },
	{ name: 'Porsche', country: 'Germany' },
	{ name: 'Audi', country: 'Germany' },
	{ name: 'BMW', country: 'Germany' },
	{ name: 'Lamborghini', country: 'Italy' },
	{ name: 'Ferrari', country: 'Italy' },
];

// function to return german cars
var isGerman = function(car) {
	return car.country === 'German';
}
// function to return British cars
var isBritish = function(car) {
	return car.country === 'UK';
}
// filtering German cars
var german = cars.filter(isGerman);
// filtering British cars
var british = cars.filter(isBritish);





//Find
//The find function is a higher order function similar to filter where the difference is
// that while filter returns a list of items matching the filter criteria, find returns
// only the first match. Using the same sample the output will be as follows:

// List of cars
var cars = [
	{ name: 'Aston Martin', country: 'UK' },
	{ name: 'Jaguar', country: 'UK' },
	{ name: 'Porsche', country: 'Germany' },
	{ name: 'Audi', country: 'Germany' },
	{ name: 'BMW', country: 'Germany' },
	{ name: 'Lamborghini', country: 'Italy' },
	{ name: 'Ferrari', country: 'Italy' },
];

// function to return german cars
var isGerman = function(car) {
	return car.country === 'German';
}
// function to return British cars
var isBritish = function(car) {
	return car.country === 'UK';
}
// filtering german cars
var german = cars.find(isGerman); // output => { name: 'Porsche', country: 'Germany' }
// filtering british cars
var british = cars.find(isBritish); // output => { name: 'Aston Martin', country: 'UK' }





// Map
// Map is a higher order function like filter, but unlike filter, which returns an array
// based on the filter criteria, map transforms them. Let’s take our earlier example of a
// list of cars and try to return the make of all cars using traditional for loop:

// List of cars
var cars = [
	{ name: 'Aston Martin', country: 'UK' },
	{ name: 'Jaguar', country: 'UK' },
	{ name: 'Porsche', country: 'Germany' },
	{ name: 'Audi', country: 'Germany' },
	{ name: 'BMW', country: 'Germany' },
	{ name: 'Lamborghini', country: 'Italy' },
	{ name: 'Ferrari', country: 'Italy' },
];

var names = [];
for (var i = 0; i < cars.length; i++){
	names.push(cars[i].name);
}



// The for loop here iterates through each item within cars and pushes the name property
// back into the array. Same old stuff. Now let’s see how this might change when we apply
// map over the list of cars.

// List of cars
	var cars = [
	{ name: 'Aston Martin', country: 'UK' },
	{ name: 'Jaguar', country: 'UK' },
	{ name: 'Porsche', country: 'Germany' },
	{ name: 'Audi', country: 'Germany' },
	{ name: 'BMW', country: 'Germany' },
	{ name: 'Lamborghini', country: 'Italy' },
	{ name: 'Ferrari', country: 'Italy' },
];

// return the name of cars
var names = cars.map(function(car) {
	return car.name;
});

// return the name and country
var names = cars.map(function(car) {
	return car.name + " is from " + car.country;
});


// The first map returns a list of all car names and the second one returns
// the car name + " is from " country string. This has the same advantages of
// reduced code size and easy maintainability. The same thing in ES6 would be as follows:

// return the name in ES6ways
var names = cars.map((car) => { return car.name; });
// the above statement can be further simplified as follows:
var names = cars.map(car => car.name);
// you can even replace the variable car with something like x
var names = cars.map(x => x.name); // tada!!!

// Using ES6 arrow operator => see how this whole expression turned into something
// as simple as var names = cars.map(x => x.name);. It exactly tells you what the
// transformation is x becomes x.name. Now that looks like something out of your
// algebra class from your school days. That’s why it is called functional programming :wink:






// Reduce
// So far we have seen iterating over a list of items and returning another list
// of items that satisfy a particular criteria (filter) or get the list of items
// transformed in a particular way (map). Now there are some instances where we
// need to calculate a single value from an array, like finding the sum of all
// the values from a collection of numbers.

// Let’s take the previous example of collection of cars and assume that a wealthy
// billionaire owns all of these cars. He decides to calculate the worth of all his cars.
// We add another property price to the list. Let’s see how we might calculate the total
// price using traditional for loop:

// List of cars
var cars = [
	{ name: 'Aston Martin', country: 'UK', price: 250 },
	{ name: 'Jaguar', country: 'UK', price: 150 },
	{ name: 'Porsche', country: 'Germany', price: 120 },
	{ name: 'Audi', country: 'Germany', price: 100 },
	{ name: 'BMW', country: 'Germany', price: 75 },
	{ name: 'Lamborghini', country: 'Italy', price: 450 },
	{ name: 'Ferrari', country: 'Italy', price: 550 },
];

// return the total price of cars
var totalPrice = 0;
for (var i = 0; i < cars.length; i++) {
	totalPrice += cars[i].price;
}
// Simple stuff, we just iterate over all the items and add the price to the
// variable totalPrice which has an initial value of 0. Simple programming 101.
// Now let’s implement the same using reduce function.

// List of cars
var cars = [
	{ name: 'Aston Martin', country: 'UK', price: 250 },
	{ name: 'Jaguar', country: 'UK', price: 150 },
	{ name: 'Porsche', country: 'Germany', price: 120 },
	{ name: 'Audi', country: 'Germany', price: 100 },
	{ name: 'BMW', country: 'Germany', price: 75 },
	{ name: 'Lamborghini', country: 'Italy', price: 450 },
	{ name: 'Ferrari', country: 'Italy', price: 550 },
];

// return the total price of cars
var totalPrice = cars.reduce(function(sum, car) {
	return sum + car.price;
}, 0);

// simplified using ES6 syntax
var totalPrice = cars.reduce((sum, car) => {sum + car.price}, 0);
// The reduce function takes in two arguments, the sum and the current item car.
// What is does as it iterates through the list, it adds the car.price of that
// particular item to the sum. Thereby sum becoming a total of all prices. This
// is a very simple example of how reduce works. It also takes an object as the start
// value for sum, which in our case is denoted by the 0 passed in right after the callback function.

// So, reduce is a very powerful higher order function that can be used when there are
// no fitting ready made solutions like map or filter. So welcome to the world of functional
// programming, hope this excites you a bit about JavaScript. There are many resources online
// on functional programming and ES6 in general. Learning to program the functional way will
// definitely help in becoming a better programmer in any language.
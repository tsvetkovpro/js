// Sum without highest and lowest number

// 1
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0


// 2
function sumArray(array) {
	if (array == null) {
		return 0;
	} else if (array.length < 2) {
		return 0;
	} else {
		array = array.sort(function (a, b) {
			return a - b;
		});
		var total = 0;
		for (var i = 1; i < array.length - 1; i++) {
			total += array[i];
		}
		return total;
	}
}


// 3
function sumArray(array) {
	if (array == null || array.length < 2) {
		return 0;
	}

	var sum = 0;

	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}

	return sum - findSmallest(array) - findBiggest(array);

}

function findSmallest(array) {
	var smallest = array[0];

	for (var i = 0; i < array.length; i++) {
		if (array[i] < smallest) {
			smallest = array[i];
		}
	}

	return smallest;
}

function findBiggest(array) {
	var biggest = array[0];

	for (var i = 0; i < array.length; i++) {
		if (array[i] > biggest) {
			biggest = array[i];
		}
	}

	return biggest;
}


// my stack
function getMaxOfArray(numArray) {
	return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
	return Math.min.apply(null, numArray);
}

function sumArray(numbers){
	var maxPlusMin = getMaxOfArray(numbers) + getMinOfArray(numbers);
	if (numbers && isNaN(numbers) && (numbers.length  != 0)) {
		return numbers.reduce(function(sum, n){
			return n + sum;
		}, -maxPlusMin );
	} else {
		return numbers = 0;
	}
}



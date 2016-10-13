// Categorize New Member

// first my:
var arr = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];
var arr2 = [];

function openOrSenior(data){

	if (Array.isArray(data)) {

		for (var i = 0; i < data.length; i++) {
			if (data[i][0] > 55 && data[i][1] > 7) {
				arr2.push("Senior");
			} else {
				arr2.push("Open");
			}
		}
		return arr2;
	}
}

console.log(openOrSenior(arr));





// grundy
// Для отображения одной коллекции элементов в другую используется метод map

var arr = [
	[18, 20],
	[45, 2],
	[61, 12],
	[37, 6],
	[21, 21],
	[78, 9]
];
var arr2 = [];

function openOrSenior(data) {

	if (Array.isArray(data)) {

		return data.map(el => el[0] > 55 && el[1] > 7 ? "Senior" : "Open");
	}
}
console.log(openOrSenior(arr));




// best

function openOrSenior(data){
	function determineMembership(member){
		return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
	}
	return data.map(determineMembership);
}



// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
	return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}



























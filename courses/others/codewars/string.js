// reverseWords("This is an example!"); // returns "sihT si na !elpmaxe"
function reverseWords(str) {
	str = str.split(" ");
	var res = [];
	for (var i = 0; i < str.length; i++) {
		res.push(str[i].split("").reverse().join(""));
	}
	return res.join(" ");
}
console.log(reverseWords("This is an example!"));


function reverseWords2(str) {
	return str.split(" ").map(
		function (a) {
			return a.split("").reverse().join("")
		}
	).join(" ");
}
console.log(reverseWords2("This is an example!"));


// es6
const reverseWords3 = (str) => str
	.split(' ')
	.map(word => word.split('').reverse().join(''))
	.join(' ');
console.log(reverseWords3("This is an example!"));


// string.replace - /`/g ---> <code> </code>
let count = 0;
const input = 'Run `npm install`, then `npm start`';

const output = input.replace(/`/g, () => {
	count++;
	if (count % 2) {
		return '<code>'
	}
	return '</code>';
});

// or if I wanted to show off my mad one-liner skillz
// const output = input.replace(/`/g, () => ++count % 2 ? '<code>' : '</code>');
//             document.querySelector('#output').innerHTML = output;


console.log('\n');





// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
	var arr = this.split(' ');
	return arr.map(function (el) {
		return el.charAt(0).toUpperCase() + el.slice(1);
	}).join(' ');
};
var str = "How can mirrors be real if our eyes aren't real";
console.dir(str.toJadenCase());


// best solution
String.prototype.toJadenCase2 = function () {
	return this.split(" ").map(function (word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}).join(" ");
};
var str2 = "How can mirrors be real if our eyes aren't real";
console.dir(str2.toJadenCase2());


// Нужно написать функцию на Javascript которая бы вставляла символ...
function star(string, token) {
	return string.replace(new RegExp(token, 'g'), '*' + token + '*');
}

console.log(star('abcabcbbahebbb', 'bb'));
console.log(star('abcdhklmalh', 'h'));


// Либо - разбить строку на подстроки по разделителю token и сложить обратно с другим разделителем *token*:
function star(string, token) {
	return string.split(token).join('*' + token + '*');
}

console.log(star('abcabcbbahebbb', 'bb'));
console.log(star('abcdhklmalh', 'h'));





// Вернуть середину строки js

// 1
function getMiddle(str) {
	return str.substr((Math.ceil(str.length / 2) - 1), (2 - str.length % 2));
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));


// 2
function getMiddle(str) {
	var arr = str.split("");
	while (arr.length > 2) {
		arr.pop();
		arr.shift();
	}
	return arr.join("");
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));


// best practies
function getMiddle(s) {
	return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}




// Finding the Most Frequent String in a JavaScript Array

console.clear();

function mostFreqStr(arr) {
	//ERROR HANDLING
	//more than one argument passed
	if (arguments.length > 1) {
		return "Sorry, you may only pass one array of strings to mostFreqStr."
	}
	//the argument is not an array OR if it's empty
	if (!Array.isArray(arr) || arr.length < 1) {
		return "Sorry, you may only pass an array of strings to mostFreqStr."
	}
	//an element in arr is not a string
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== "string") {
			return `Sorry, element at index ${i} is not a string.`
		}
	}

	var obj = {}, mostFreq = 0, which = [];

	arr.forEach(ea => {
		if (!obj[ea]) {
			obj[ea] = 1;
		} else {
			obj[ea]++;
		}

		if (obj[ea] > mostFreq) {
			mostFreq = obj[ea];
			which = [ea];
		} else if (obj[ea] === mostFreq) {
			which.push(ea);
		}
	});

	if (which.length > 1) {
		which = `"${which.join(`" and "`)}" are the most frequent strings in the array.`
	} else {
		which = `"${which}" is the most frequent string in the array.`
	}

	return which;
}

mostFreqStr(["x", "y", "z", "z"], ["x", "x", "y", "z", "z"]); //Sorry, you may only pass one array of strings to mostFreqStr.
mostFreqStr(); //Sorry, you may only pass an array of strings to mostFreqStr.
mostFreqStr([]); //Sorry, you may only pass an array of strings to mostFreqStr.
mostFreqStr("x, y, z"); //Sorry, you may only pass an array of strings to mostFreqStr.
mostFreqStr(["x", "x", 1, 1, 1, "z"]); //Sorry, element at index 2 is not a string.
mostFreqStr(["x", "x", "y", "y", "y", "z"]); //"y" is the most frequent string in the array.
mostFreqStr(["x", "x", "x", "y", "y", "y", "z"]); //"x" and "y" are the most frequent strings in the array.








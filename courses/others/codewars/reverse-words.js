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
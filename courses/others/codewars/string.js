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
	return arr.map(function(el) {
		return el.charAt(0).toUpperCase() + el.slice(1);
	}).join(' ');
};
var str = "How can mirrors be real if our eyes aren't real";
console.dir(str.toJadenCase());


// best solution
String.prototype.toJadenCase2 = function () {
	return this.split(" ").map(function(word){
		return word.charAt(0).toUpperCase() + word.slice(1);
	}).join(" ");
};
var str2 = "How can mirrors be real if our eyes aren't real";
console.dir(str2.toJadenCase2());





// Нужно написать функцию на Javascript которая бы вставляла символ...
function star(string, token) {
	return string.replace(new RegExp(token, 'g'), '*'+token+'*');
}

console.log(star('abcabcbbahebbb', 'bb'));
console.log(star('abcdhklmalh', 'h'));


// Либо - разбить строку на подстроки по разделителю token и сложить обратно с другим разделителем *token*:
function star(string, token) {
	return string.split(token).join('*'+token+'*');
}

console.log(star('abcabcbbahebbb', 'bb'));
console.log(star('abcdhklmalh', 'h'));









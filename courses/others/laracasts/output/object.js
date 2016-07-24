'use strict';

// object shorthand

function getPerson() {
  var name = 'Yaroslav';
  var age = 33;

  return {
    name: name,
    age: age,
    greet: function greet() {
      return 'Привет, ' + this.name;
    }
  };
}

console.log(getPerson().greet());

var person = {
  name: 'Владимир',
  age: 30
};

var name = person.name;
var age = person.age;


console.log(age);
console.log('\n');

function getData(_ref) {
  var results = _ref.results;
  var count = _ref.count;
  var age = _ref.age;

  console.log(results, count, age);
}

getData({
  name: 'Мария',
  age: 20,
  results: ['one', 'two'],
  count: 45
});

function greet(_ref2) {
  var name = _ref2.name;
  var age = _ref2.age;

  console.log('Привет ' + name + ', тебе ' + age + ' лет');
}

greet({
  name: 'Александр',
  age: 21
});
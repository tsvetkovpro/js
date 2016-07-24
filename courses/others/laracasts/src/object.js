// object shorthand


function getPerson() {
  let name = 'Yaroslav';
  let age = 33;

  return {
    name,
    age,
    greet() {
      return `Привет, ${this.name}`;
    }
  };
}

console.log(getPerson().greet());


let person = {
  name: 'Владимир',
  age: 30
};

let {name, age} = person;

console.log(age);
console.log('\n');


function getData({results, count, age}) {
  console.log(results, count, age);
}

getData({
  name: 'Мария',
  age: 20,
  results: ['one', 'two'],
  count: 45
});


function greet({name, age}) {
  console.log(`Привет ${name}, тебе ${age} лет`);
}

greet({
  name: 'Александр',
  age: 21
});







































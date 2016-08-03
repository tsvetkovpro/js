function *numbers() {
  console.log('Поехали');

  yield 1;
  yield 2;
  yield 3;
}

let iterator = numbers();

console.log(iterator.next());
console.log(iterator.next().value);



function *range(start, end) {
  while (start <= end) {
    yield start;

    start++
  }
}

let iterator2 = range(33, 35);

for (let i of iterator2) {
  console.log(i);
}


console.log(
  [...range(144, 148)]
);


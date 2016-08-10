let names = ['Sam', 'Tylor', 'Brook'];

for (let name of names) {
  console.log(name);
}
/*

 what realy happening?
 let iterator = names[Symbol.iterator]();

 let firstRun = iterator.next(); ---> { done: false, value: "Sam" }
 let name = firstRun.value;

 let secondRun = iterator.next(); ---> { done: false, value: "Tyler" }
 let name = secondRun.value;

 let thirdRun = iterator.next(); ---> { done: false, value: "Brook" }
 let name = thirdRun.value;

 let fourthRun = iterator.nex(); ---> { done: true, value: undefined }

 */


console.log('\n');


// make object iterable

let post = {
  title: "123",
  replies: 19,
  some: true
};

post[Symbol.iterator] = function () {
  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  let next = () => {
    if (count >= properties.length) {
      isDone = true;
    }
    return {done: isDone, value: this[properties[count++]]};
  };
  return {next};
};

for (let prop of post) {
  console.log(prop);
}

console.log('\n');

let values = [...post];
console.log(values); // [ '123', 19, true ]

console.log('\n');

let [title, replies, boo] = post;
console.log(title);
console.log(replies);
console.log(boo);







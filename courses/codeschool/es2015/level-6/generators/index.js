// generaton function

function *nameList() {
  yield "sam";  // use yield to return iterator object
  yield "tyler";
}


for (let prop of nameList()) {
  console.log(prop);
}

let names = [...nameList()];
console.log(names); // [ 'sam', 'tyler' ]


let [first, second] = nameList();
console.log(first, second);




// refactoring to generator function
let post = {title: "New features in js", replies: 19};

post[Symbol.iterator] = function *() {

  let properties = Object.keys(this);
  for (let prop of properties) {
    yield this[prop]; // same as manualy return each property value:
                                                      // yield this.title;
                                                      // yield this.replies;
  }
}

for (let prop of post) {
  console.log(prop);
}

















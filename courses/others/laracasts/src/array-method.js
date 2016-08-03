// the old way
console.log(
  [2, 3, 5, 7, 1, 14].indexOf(14) > -1
);


/*=============================================================*/
// es6
console.log(
  [true, 1, 3, 5, 11].includes(2)
);

console.log(
  [1, 3, 5, 7, 9].find(item => item % 2)
);

console.log(
  [1, 3, 5, 7, 9].findIndex(item => item % 2)
);
/*=============================================================*/




/*=============================================================*/
class User {
  constructor(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
  }
}

let users = [
  new User('Jefrey', false),
  new User('Jane', true),
  new User('Jack', false)
];

console.log('');
console.log(
  users.find(user => user.isAdmin)
);
console.log(
  users.find(user => user.isAdmin).name
);
console.log('');
/*=============================================================*/




/*=============================================================*/
let items = ["jeff", "jonh", "mike"].entries();

for (let name of items) console.log(name);
/*=============================================================*/




/*
*  [].fill()
*  [].keys()
*  [].values()
*  [].entries()
*
* */







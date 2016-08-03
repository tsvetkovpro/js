'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// the old way
console.log([2, 3, 5, 7, 1, 14].indexOf(14) > -1);

/*=============================================================*/
// es6
console.log([true, 1, 3, 5, 11].includes(2));

console.log([1, 3, 5, 7, 9].find(function (item) {
  return item % 2;
}));

console.log([1, 3, 5, 7, 9].findIndex(function (item) {
  return item % 2;
}));
/*=============================================================*/

/*=============================================================*/

var User = function User(name, isAdmin) {
  _classCallCheck(this, User);

  this.name = name;
  this.isAdmin = isAdmin;
};

var users = [new User('Jefrey', false), new User('Jane', true), new User('Jack', false)];

console.log('');
console.log(users.find(function (user) {
  return user.isAdmin;
}));
console.log(users.find(function (user) {
  return user.isAdmin;
}).name);
console.log('');
/*=============================================================*/

/*=============================================================*/
var items = ["jeff", "jonh", "mike"].entries();

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var name = _step.value;
    console.log(name);
  } /*=============================================================*/
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = [numbers, range].map(regeneratorRuntime.mark);

function numbers() {
  return regeneratorRuntime.wrap(function numbers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Поехали');

          _context.next = 3;
          return 1;

        case 3:
          _context.next = 5;
          return 2;

        case 5:
          _context.next = 7;
          return 3;

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var iterator = numbers();

console.log(iterator.next());
console.log(iterator.next().value);

function range(start, end) {
  return regeneratorRuntime.wrap(function range$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(start <= end)) {
            _context2.next = 6;
            break;
          }

          _context2.next = 3;
          return start;

        case 3:

          start++;
          _context2.next = 0;
          break;

        case 6:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

var iterator2 = range(33, 35);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = iterator2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;

    console.log(i);
  }
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

console.log([].concat(_toConsumableArray(range(144, 148))));
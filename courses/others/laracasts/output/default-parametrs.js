'use strict';

var consoleStyles = {
  'h3': 'font: 1.2em/1 Arial; color: olivedrab;',
  'h4': 'font: 1.2em/1 Consolas; color: #247BA0;'
};
function log(msg, style) {
  if (!style || !consoleStyles[style]) {
    style = 'bold';
  }
  console.log('%c' + msg, consoleStyles[style]);
}

function defaultDiscountRate() {
  return .10;
}

function applyDiscount(cost) {
  var discount = arguments.length <= 1 || arguments[1] === undefined ? defaultDiscountRate() : arguments[1];

  return cost - cost * discount;
}

console.log(applyDiscount(100));

log(applyDiscount(200), "h3");
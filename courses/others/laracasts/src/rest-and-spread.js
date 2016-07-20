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



// "в одну сторону" - rest
function sum(...numbers) {
  return numbers.reduce(
    (prev, current) => prev + current
  );
}
log(sum(1,2,3,4,5), "h3");



// "в другую сторону" - spread - split in array into arguments
function sum2(x, y) {
  return x + y;
}
let num = [1, 2];
console.log(sum2(...num));



















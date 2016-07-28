'use strict';

var title = 'Красная строка';

if (!title.includes('Синий')) {
  console.log('В этой строке');
}

var heading = 'Здесь заголовок';
console.log('<='.repeat(3) + ' ' + heading + ' ' + '=>'.repeat(3));

var headingBest = 'Здесь заголовок';
var padder = '='.repeat(10);

console.log(padder + ' ' + headingBest + ' ' + padder);
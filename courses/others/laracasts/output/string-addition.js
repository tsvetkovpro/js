'use strict';

var title = 'Красная строка';

if (!title.includes('Синий')) {
  console.log('В этой строке нет ...');
}

if (title.includes('Красная')) {
  console.log('В этой строке есть ...');
}

if (title.startsWith('Красн')) {
  console.log('Эта строка начинается с Красн ...');
}

if (title.startsWith('н', 4)) {
  console.log('Этот символ 4й');
}

if (title.endsWith('рока')) {
  console.log('Эта строка заканчивается с рока ...');
}

var heading = 'Здесь заголовок';
console.log('<='.repeat(3) + ' ' + heading + ' ' + '=>'.repeat(3));

var headingBest = 'Здесь заголовок';
var padder = '='.repeat(10);

console.log(padder + ' ' + headingBest + ' ' + padder);
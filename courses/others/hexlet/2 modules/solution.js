/*
import path from 'path';
path.sep
*/


/*
// file: index.js
import * as solution from './solution';

solution.pi;
solution.square(4);


// file: solution.js
export const pi = 3.14;

export const square = (num) => {
	return num * num;
}
*/


/*
// экспорт по умолчанию
// file: index.js
import cube from './cube';

cube(4);

// file cube.js
export default (num) => {
	return num * num * num;
}
*/

export default (a, b) => {
  return (1 / 2) * a * sqrt(b * b - (a * a) / 4);
};


/*
Реализуйте и экспортируйте функцию reverse, которая переворачивает строку.

Пример:

reverse('hello, world!'); // !dlrow ,olleh
Подсказки
Для подсчета длины строки используйте функцию length из модуля strings. strings.length('cat'); // 3
*/

// BEGIN
export const reverse = (str) => {
  let i = strings.length(str) - 1;

  let result = '';
  while (i >= 0) {
    result += str[i];
    i--;
  }

  return result;
};
// END
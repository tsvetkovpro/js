/*
Функции lessThan и greateThan в модуле solution сравнивают две строки и возвращают true/false. Сравнение идет по количеству заглавных символов в строке (больше заглавных, больше строка).

Специальные символы (например пробел) не имеют заглавных эквивалентов, и в данном задании считаются заглавными.

Примеры:

greateThan('AD', 'ad sd'); // true, сравнение на > (больше)
greateThan('AD', '   Ad sd'); // false, сравнение на > (больше)
lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
solution.js
Допишите необходимые части функций для того чтобы заработали функции lessThan и greateThan.

Функция compare, принимающая две строки first и second работает по следующему алгоритму:

Если первая строка больше второй то возвращается 1.
Если вторая строка больше первой то возвращается -1.
Во всех остальных случаях возвращается 0.
*/

import * as strings from './strings';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let result = 0;
  for (let i = 0; i < strings.length(str); i++) {
    if (strings.toUpperCase(str[i]) === str[i]) {
      result++;
    }
  }

  return result;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  }

  return 0;
  // END
};

export const greateThan = (first, second) => {
  return compare(first, second) === 1;
};

export const lessThan = (first, second) => {
  return compare(first, second) === -1;
};
// END

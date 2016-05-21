/*
Реализуйте и экспортируйте рекурсивную функцию smallestDivisor используя итеративный процесс. Функция должна находить минимальный делитель переданного числа.

Для этого достаточно последовательно проверять делимость начиная с двойки. Если делитель не найден, значит это 1, а искомое число простое.

smallestDivisor(17); // 1
smallestDivisor(15); // 3
*/

// BEGIN
export const smallestDivisor = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return 1;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };

  return iter(2);
};
// END
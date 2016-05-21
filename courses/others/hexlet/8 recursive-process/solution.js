/*
Проверьте с помощью утверждений (asserts) правильность работы функции solution.factorial, которая вычисляет факториал переданного числа.
*/

// BEGIN
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
// END
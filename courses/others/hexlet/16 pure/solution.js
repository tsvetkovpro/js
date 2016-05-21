/*
Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.
solution('hello, world!'); // Hello, World!
*/


// BEGIN
export default (str) => {
  let result = '';
  for (let i = 0; i < strings.length(str); i++) {
    const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? strings.toUpperCase(str[i]) : str[i];
  }

  return result;
};

/*
 * We do not expect that you will understand example below.
 * But it is great example of Automata-based programming

export default (str) => {
  let result = '';
  let state = 'outside';
  for (let i = 0; i < strings.length(str); i++) {
    const prevState = state;
    state = str[i] === ' ' ? 'outside' : 'inside';
    result += state === 'inside' && prevState === 'outside' ? strings.toUpperCase(str[i]) : str[i];
  }

  return result;
};
*/

// END
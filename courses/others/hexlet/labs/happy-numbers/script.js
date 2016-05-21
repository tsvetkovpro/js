

/*
���������� �����
������� ����������� ������� ��, ������� � ���������� ���� �������������� ���� "����� ��������� ����" ����������� � �������. ��������:

7 => 7^2 = 49, 49 => 4^2 + 9^2 = 16 + 81 = 97, 97 => 9^2 + 7^2 = 81 + 49 = 130, 130 => 1^2 + 3^2 + 0^2 = 10, 10 => 1^2 + 0^2 = 1.

�����: �������� ����� 7 - ����������.

solution.js
���������� � ������������� ������� happyNumber, ������� ������ ������� true, ���� ����� ����������, � false ���� ���. ���������� �������� �������� ������ ���������� ���������� ������ 10.
*/






import * as strings from './strings';

const sumDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < strings.length(numAsStr); i++) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// BEGIN (write your solution here)
export const happyNumber = (num) => {
  let result = num;
  for (let i = 0; i < 10; i++) {
    if (sumDigits(result) === 1) {
      return true;
    } else {
      result = sumDigits(result);
    }
  }
}
// END

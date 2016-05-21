
���������� ������� square, ������� ���������� ������� �����.
���������� ������� sumOfSquares, ������� ���������� ����� ��������� ���� �����.
���������� ������� squareSumOfSquares, ������� ���������� ������� ����� ��������� ���� �����.


const square = (num) => {
  return num * num;
};

const sumOfSquares = (num1, num2) => {
  return square(num1) + square(num2);
};

const squareSumOfSquares = (num1, num2) => {
  return square(sumOfSquares(num1, num2));
};


square(10); // 100
sumOfSquares(10, -9); // 181
squareSumOfSquares(1, 1); // 4
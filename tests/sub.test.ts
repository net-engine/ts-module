import { sub } from '../src/index';

describe('Subtraction', () => {
  test('it subtracts 2 numbers', () => {
    expect(sub(2, 1)).toStrictEqual(1);
  });

  test('it subtracts 4 numbers', () => {
    expect(sub(10, 3, 2, 1)).toStrictEqual(4);
  });
});

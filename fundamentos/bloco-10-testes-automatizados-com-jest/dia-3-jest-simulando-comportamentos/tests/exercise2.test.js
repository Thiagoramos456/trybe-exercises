const randomLib = require('../exercise2.js');

it('Checa se retorna um número aleatório (10)', () => {
  randomLib.random = jest.fn().mockImplementation((a, b) => a / b);

  expect(randomLib.random(10, 2)).toBe(5);
  expect(randomLib.random).toHaveBeenCalled();
  expect(randomLib.random).toHaveBeenCalledTimes(1);
  expect(randomLib.random).toHaveBeenCalledWith(10, 2);
});
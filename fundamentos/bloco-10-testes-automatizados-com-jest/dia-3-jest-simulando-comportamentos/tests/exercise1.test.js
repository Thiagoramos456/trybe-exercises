const randomLib = require('../exercise1.js');

it('Checa se retorna um número aleatório (10)', () => {
  randomLib.random = jest.fn().mockReturnValue(10);
  expect(randomLib.random()).toBe(10);
});
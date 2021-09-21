const myRemoveWithoutCopy = require('../src/myRemoveWithoutCopy.js');

describe('Verifica se os resultados estão corretos', () => {
  it('Verifica se remove o número 3 do array quando se passa 3 como parâmetro', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifica se o número é realmente', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se o array passado por parâmetro sofreu alterações', () => {
    const numbers = [1, 2, 3, 4];
    myRemoveWithoutCopy(numbers, 3);
    expect(numbers).toEqual([1, 2, 4]);
  });
  it('Verifica nada acontece com o array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
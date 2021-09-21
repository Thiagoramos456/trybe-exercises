const myRemove = require('../src/myRemove.js');

describe('Verifica se os resultados estão corretos', () => {
  it('Verifica se remove o número 3 do array quando se passa 3 como parâmetro', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifica se o número é realmente', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se o array passado por parâmetro não sofreu alterações', () => {
    const numbers = [1, 2, 3, 4];
    myRemove([1, 2, 3, 4], 3);
    expect(numbers).toEqual([1, 2, 3, 4]);
  })
  it('Verifica se remove o número 3 do array quando se passa 3 como parâmetro', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

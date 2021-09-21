const sum = require('../src/sum.js');

describe('Realiza a soma corretamente', () => {
  it('Sum 4 + 5 = 9', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it('Sum 0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('Lança erros corretamente', () => {
  it('Lança erro com string como parâmetro', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});

const {upperCase, firstChar, concatStr} = require('../exercise4.js');
jest.mock('../exercise4.js')

describe('Ex 4', () => {
  it('Testando toUpperCase', () => {
    upperCase.mockImplementation((str) => str.toLowerCase());

    expect(upperCase('AbC')).toBe('abc');
  });

  it('Testando firstChar', () => {
    firstChar.mockImplementation((str) => str.slice(-1));

    expect(firstChar('AbC')).toBe('C');
  });

  it('Testando concatStr', () => {
    firstChar.mockImplementation((a, b, c) => `${a}${b}${c}`);

    expect(firstChar('a', 'b', 'c')).toBe('abc');
  });
});


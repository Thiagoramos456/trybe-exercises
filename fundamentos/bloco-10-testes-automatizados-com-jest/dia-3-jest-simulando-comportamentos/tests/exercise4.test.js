const {upperCase, firstChar, concatStr} = require('../exercise4&5.js');
jest.mock('../exercise4&5.js')

describe('Ex 4', () => {
  it('Testando toUpperCase', () => {
    upperCase.mockImplementation((str) => str.toLowerCase());

    expect(upperCase('AbC')).toBe('abc');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase).toHaveBeenCalledWith('AbC');
  });

  it('Testando firstChar', () => {
    firstChar.mockImplementation((str) => str.slice(-1));

    expect(firstChar('AbC')).toBe('C');
    expect(firstChar).toHaveBeenCalled();
    expect(firstChar).toHaveBeenCalledTimes(1);
    expect(firstChar).toHaveBeenCalledWith('AbC');
  });

  it('Testando concatStr', () => {
    concatStr.mockImplementation((a, b, c) => `${a}${b}${c}`);

    expect(concatStr('a', 'b', 'c')).toBe('abc');
    expect(concatStr).toHaveBeenCalled();
    expect(concatStr).toHaveBeenCalledTimes(1);
    expect(concatStr).toHaveBeenCalledWith('a', 'b', 'c');
  });
});

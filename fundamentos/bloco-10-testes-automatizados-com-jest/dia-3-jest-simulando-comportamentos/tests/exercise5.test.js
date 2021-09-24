const lib = require('../exercise4&5')

describe('Ex 5', () => {
  it('Testando to upperCase 2', () => {
    const mock = jest
      .spyOn(lib, 'upperCase')
      .mockImplementation((str) => str.toLowerCase());

    expect(lib.upperCase('ABC')).toBe('abc');
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('ABC');

    lib.upperCase.mockRestore();

    expect(lib.upperCase('abc')).toBe('ABC');
  });
});
const randomLib = require('../exercise1&2&3.js');

describe('Ex 1', () => {
  it('Checa se retorna um número aleatório (10)', () => {
    randomLib.random = jest.fn().mockReturnValue(10);
  
    expect(randomLib.random()).toBe(10);
    expect(randomLib.random).toHaveBeenCalled();
    expect(randomLib.random).toHaveBeenCalledTimes(1);
  });
});

describe('Ex 2', () => {
  it('Mudança de implementação 1 vez', () => {
    randomLib.random = jest.fn().mockImplementation((a, b) => a / b);
  
    expect(randomLib.random(10, 2)).toBe(5);
    expect(randomLib.random).toHaveBeenCalled();
    expect(randomLib.random).toHaveBeenCalledTimes(1);
    expect(randomLib.random).toHaveBeenCalledWith(10, 2);
  });
});

describe('Ex 3', () => {
  it('Mudança de implementação 2 vezes', () => {
    randomLib.random = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
    expect(randomLib.random(2, 3, 2)).toBe(12);
    expect(randomLib.random).toHaveBeenCalled();
    expect(randomLib.random).toHaveBeenCalledTimes(1);
    expect(randomLib.random).toHaveBeenCalledWith(2, 3, 2);

    randomLib.random.mockReset();
    randomLib.random.mockImplementation((a) => a * 2);

    expect(randomLib.random(3)).toBe(6);
    expect(randomLib.random).toHaveBeenCalled();
    expect(randomLib.random).toHaveBeenCalledTimes(1);
    expect(randomLib.random).toHaveBeenCalledWith(3);
  });
});

const [obj1, obj2, obj3] = require('../src/objectComparison.js');

describe('Comparando objetos', () => {
  it('comparando obj1 com obj2', () => {
    expect(obj1).toEqual(obj2);
  });
  it('comparando obj1 com obj1', () => {
    expect(obj1).toBe(obj1);
  });
  it('comparando obj1 com obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
});
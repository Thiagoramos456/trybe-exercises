const myFizzBuzz = require('../src/myFizzBuzz.js');

describe('Verifica se as divisões tem o resultado correto', () => {
  it('divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
  });
  it('divisível por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(18)).toBe('fizz');
    expect(myFizzBuzz(60)).not.toBe('fizz');
  });
  it('divisível por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(20)).toBe('buzz');
    expect(myFizzBuzz(24)).not.toBe('buzz');
  });
  it('não é divisível por 3 ou por 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz(11)).toBe(11);
  });
  it('não é número', () => {
    expect(myFizzBuzz('7')).toBe(false);
    expect(myFizzBuzz('15')).toBe(false);
  });
});
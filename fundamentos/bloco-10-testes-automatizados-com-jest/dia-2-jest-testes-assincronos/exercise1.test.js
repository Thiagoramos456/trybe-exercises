// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe("Converte todas as letras em maiúsculas", (done) => {
  it("Converte abc em ABC", (done) => {
    uppercase('abc', (testWord) => {
      try {
        expect(testWord).toBe("ABC");
        done();
      } catch (error) {
        done(error);
      }
    });
    
  });
});
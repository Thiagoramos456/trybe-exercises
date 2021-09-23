// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) =>
  new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id);

    if (result) {
      return resolve(result);
    }

    return reject(new Error(`User with ${id} not found.`));
  });

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('Testando busca de usuário', () => {
  it('Retornar username caso ele exista', () => {
    return getUserName(1).then((user) => {
      expect(user).toEqual('Mark');
    });
  });

  it('Retornar erro caso não exista', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => {
      expect(error.message).toMatch('User with 3 not found.');
    });
  });
});

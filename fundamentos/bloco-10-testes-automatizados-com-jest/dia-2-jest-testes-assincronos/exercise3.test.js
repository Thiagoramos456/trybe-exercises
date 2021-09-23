// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .

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
  it('Retornar username caso ele exista', async () => {
    try {
      const data = await getUserName(1);
      expect(data).toBe('Mark');
    } catch (error) {
      console.log(error);
    }
  });

  it('Retornar erro caso não exista', async () => {
    expect.assertions(1);
    try {
      const data = await getUserName(3);
    } catch (error) {
      expect(error.message).toMatch('User with 3 not found.');
    }
  });
});

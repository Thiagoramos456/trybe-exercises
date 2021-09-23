// 4 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Verifica se existem projetos na lista', () => {
  it('Verifica se tem o projeto todo-list', () => {
    expect(getRepos('https://api.github.com/orgs/tryber/repos'))
      .resolves.toContain('sd-01-week4-5-project-todo-list');
  });
  
  it('Verifica se tem o projeto meme-generator', () => {
    expect(getRepos('https://api.github.com/orgs/tryber/repos'))
      .resolves.toContain('sd-01-week4-5-project-meme-generator');
  });
});
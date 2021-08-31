// 1 - Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorial = (n) => {
  return n > 0 ? n * fatorial(n - 1) : 1;
};

console.log(fatorial(5));

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (phrase) => {
  const words = phrase.split(" ");
  let biggestWord = words[0];

  for (let index in words) {
    let word = words[index];

    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }
  return biggestWord;
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
); // retorna 'aconteceu'

// 4 - Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

const replaceStringByX = (string) => {
  return `Tryber ${string} aqui!`;
};

console.log(replaceStringByX("Bebeto"));

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

const skills = ["Javascript", "HTML", "CSS", "GIT", "Soft Skills"];

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

const skillsList = (skills) => {
  const sortedSkills = skills.sort();
  const formatedResult = `${replaceStringByX("Thiago")} Minhas cinco principais habilidades são: \n-${sortedSkills.join("\n-")}`;
  return formatedResult;
};

console.log(skillsList(skills));
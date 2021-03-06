// 2 - Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// Primeiramente, instancie uma Promise
// Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.

// 3 - Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

// 4 - Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

// 5 - Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.


const generateRandom50 = () => 
  Math.floor(Math.random() * 10000);

const fetchPromise = () => {

  return new Promise((resolve, reject) => {
    const numbers = [];
    
    for (let i = 0; i < 10; i += 1) {
      numbers.push(generateRandom50());
    }

    const sum = numbers.reduce((acc, n) => acc + n)
    if (sum > 8000) {
      return resolve(sum);
    } else {
      return reject(sum);
    }
  }).then((num) => [2, 3, 5, 10].map((divider) => num / divider))
    .then(array => array.reduce((number, acc) => number + acc, 0))
    .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
}

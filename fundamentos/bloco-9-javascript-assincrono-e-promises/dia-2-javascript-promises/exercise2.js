// 2 - Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// Primeiramente, instancie uma Promise
// Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

const generateRandom50 = () => 
  Math.floor(Math.random() * 5000);

const promise = new Promise((resolve, reject) => {
  const numbers = [];
  
  for (let i = 0; i < 10; i += 1) {
    numbers.push(generateRandom50());
  }

  const sum = numbers.reduce((acc, n) => acc + n)

  if (sum > 8000) {
    resolve(sum);
  } 
  reject(sum);
}).then(() => console.log("Promised resolvida"))
  .catch(() => console.log("Promise rejeitada"));


/* 3 - Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
*/

const factorial = (number) => number > 0 ? number * factorial(number - 1) : 1;

console.log(factorial(5));

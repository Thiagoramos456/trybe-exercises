let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
console.log(numbers);

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;

for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];   
}

console.log("A soma dos números do Array é: ", soma);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
soma = 0;

for (let number of numbers){
    soma += number;
}

let media = soma / numbers.length;

console.log("A média aritmética dos números: ", media);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20){
    console.log("Valor maior que 20.")
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for (let number of numbers){
    if(maior < number){
        maior = number;
    }
}

console.log("Maior número: ", maior);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impares = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 == 1){
        impares += 1;
    }
}

console.log("Quantidade de ímpares: ", impares);

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0];
for (let number of numbers){
    if(number < menor){
        menor = number;
    }
}

console.log("Menor número: ", menor)

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numberArray = [];
for (let index = 1; index < 26; index += 1){
    numberArray.push(index);
}

console.log("Array de 1 a 25: ", numberArray);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let number of numberArray){
    console.log(`Divisão de ${number} por 2: ${number / 2}`);
}
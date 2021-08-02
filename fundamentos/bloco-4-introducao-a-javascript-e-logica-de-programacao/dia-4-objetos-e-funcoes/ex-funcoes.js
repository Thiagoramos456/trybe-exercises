// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(string){
    stringReversa = string.split("").reverse().join("");
    return string === stringReversa;
}

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceMaiorValor(array){
    let maior = 0;

    for (number in array){
        if(array[number] > maior){
            maior = number;
        }
    }
    return maior;
}

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));
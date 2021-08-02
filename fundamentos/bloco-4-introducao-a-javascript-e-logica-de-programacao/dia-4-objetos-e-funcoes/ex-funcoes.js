// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(string){
    stringReversa = string.split("").reverse().join("");
    return string === stringReversa;
}


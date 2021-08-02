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

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceMenorValor(array){
    let menor = array[0];

    for (number in array){
        if(array[number] < array[menor]){
            menor = number;
        }
    }
    return menor
}

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maisCaracteres(nomes){
    let maiorNome = "";

    for (nome of nomes){
        if (nome.length > maiorNome.length){
            maiorNome = nome;
        }
    }

    return maiorNome;
}

console.log(maisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
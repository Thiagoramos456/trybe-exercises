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

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function inteiroMaisRepetente(numeros){
    let quantidades = {};
    let maisRepetente = 0;
    let frequencia = 0;
    for (numero of numeros){
        if (quantidades[numero] === undefined){
            quantidades[numero] = 1;
        }
        else{
            quantidades[numero] += 1;
        }
    }
    for (numero in quantidades){
        if (quantidades[numero] > frequencia){
            frequencia = quantidades[numero];
            maisRepetente = numero;
        }
    }

    return maisRepetente;
}

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorio(n){
    let soma = 0;
    for (let index = 1; index <= n; index += 1){
        soma += index;
    }
    return soma;
}

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function isEnding(word, ending){
    let wordEnding = word.slice(-ending.length)

    return wordEnding === ending;
}

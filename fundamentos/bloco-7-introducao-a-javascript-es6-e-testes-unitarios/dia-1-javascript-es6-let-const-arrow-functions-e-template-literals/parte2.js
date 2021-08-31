// 1 - Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorial = (n) => {
    return n > 0 ? n * fatorial(n - 1) : 1;
}

console.log(fatorial(5));

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (phrase) => {
    const words = phrase.split(' ');
    let biggestWord = words[0];

    for (let index in words) {
        let word = words[index];

        if(word.length > biggestWord.length) {
            biggestWord = word;
        }
    }
    return biggestWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'
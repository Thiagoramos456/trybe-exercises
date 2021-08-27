const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
function sortedNumbers(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    const formatedSort = sorted.join(',');
    return `Os números ${formatedSort} se encontram ordenados de forma crescente!`;
}


console.log(sortedNumbers(oddsAndEvens)); // será necessário alterar essa linha 😉
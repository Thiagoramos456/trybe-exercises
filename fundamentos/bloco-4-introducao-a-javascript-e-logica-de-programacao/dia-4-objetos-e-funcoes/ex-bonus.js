// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romanoToDecimal(numeroRomano){
    let valoresRomanos = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }  
    let valorDecimal = 0;
    for (algarismo in numeroRomano){
        let numeroAtual = valoresRomanos[numeroRomano[parseInt(algarismo)]];
        let numeroSeguinte = valoresRomanos[numeroRomano[parseInt(algarismo) + 1]];
        
        if (numeroAtual < numeroSeguinte){
            valorDecimal -= numeroAtual; 
        }
        else{
            valorDecimal += numeroAtual;
        }
    }
    return valorDecimal;
}

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function paresEmArray(numbersArray){
    let pairs = []
    for (array of numbersArray){
        for (number of array){
            if (number % 2 === 0){
                pairs.push(number);
            }
        }
    }
    return pairs;
}

console.log(paresEmArray(vector));
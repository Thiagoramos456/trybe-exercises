// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;
let asteriscos = "";

for (let bloco = 0; bloco < n; bloco += 1){
    asteriscos += "*";
}

for (let andar = 0; andar < n; andar += 1){

    console.log(asteriscos);
}
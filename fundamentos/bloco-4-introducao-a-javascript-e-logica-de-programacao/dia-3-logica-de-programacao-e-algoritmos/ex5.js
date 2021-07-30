// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 7;

let quantidadeTotal;

if (n % 2 == 1){
    quantidadeTotal = Math.ceil(n/2);
}
else{
    quantidadeTotal = Math.ceil(n/2) + 1;
}

for (let andar = 1; andar <= n; andar += 2){
    let construcaoAndar = "";
    let quantidadeEspacos = n - quantidadeTotal;
    for (let posicao = 1; posicao <= quantidadeTotal; posicao ++){
        if(andar !== n){
            if (posicao <= quantidadeEspacos){
                construcaoAndar += " ";
            }
            else if (posicao == quantidadeEspacos + 1 || posicao ==  quantidadeTotal){
                construcaoAndar += "*";
            }
            else{
                construcaoAndar += " ";
            }
        }
        else{
            construcaoAndar += "*";
        }
    }
    quantidadeTotal ++;
    console.log(construcaoAndar);
}

//  *
// ***
//*****
// 4- Depois, faça uma pirâmide com n asteriscos de base:

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
        if (posicao <= quantidadeEspacos){
            construcaoAndar += " ";
        }
        else{
            construcaoAndar += "*";
        }
    }
    quantidadeTotal ++;
    console.log(construcaoAndar);
}

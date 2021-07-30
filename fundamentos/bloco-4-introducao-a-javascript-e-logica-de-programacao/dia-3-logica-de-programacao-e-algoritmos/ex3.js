// 3 - Agora inverta o lado do triângulo. 

n = 5;

for (let andar = 1; andar <= n; andar ++){
    let construcaoAndar = "";
    let quantidadeEspacos = n - andar;
    
    for (let posicao = 1; posicao <= n; posicao ++){
        if (posicao <= quantidadeEspacos){
            construcaoAndar += " ";
        }
        else{
            construcaoAndar += "*";
        }
    }
    console.log(construcaoAndar)
}
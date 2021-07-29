let valorCusto = 1000.0;
let valorImposto = valorCusto * 0.20;
let valorCustoTotal = valorCusto + valorImposto;
let valorVenda = 1650.75;
let lucro = valorVenda - valorCustoTotal;

if(valorCusto < 0 || valorVenda < 0){
    console.log("Erro: Não pode haver valores menores que zero.")
} else{
    console.log("Valor do lucro: R$", lucro)
}
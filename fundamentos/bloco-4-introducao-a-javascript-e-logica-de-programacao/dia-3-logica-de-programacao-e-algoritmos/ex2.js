// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;
let blocosAndar;

//Percorre a quantidade de andares do triângulo. 
for (let andar = 1; andar <= n; andar++) {
  blocosAndar = "";

  //Prepara cada bloco do andar atual.
  for (let bloco = 1; bloco <= andar; bloco++) {
    blocosAndar += "*";
  }

  //Imprime o andar atual.
  console.log(blocosAndar);
}

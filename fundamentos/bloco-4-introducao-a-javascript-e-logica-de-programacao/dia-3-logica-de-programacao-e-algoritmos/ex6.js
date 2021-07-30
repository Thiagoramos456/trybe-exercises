// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

let n = 2;
let primo = true;

for (let index = 2; index < n; index ++){
    if(n % index === 0){
        primo = false;
        break;
    }
}

if (primo === true){
    console.log("É primo.")
}
else{
    console.log("Não é primo.")
}
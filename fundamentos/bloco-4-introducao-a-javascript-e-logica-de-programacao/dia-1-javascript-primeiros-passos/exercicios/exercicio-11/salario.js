let salario = 3000.00;

if(salario <= 1556.94){
    salario -= salario * 0.8;
} else if (salario <= 2594.92){
    salario -= salario * 0.9;
} else if (salario <= 5189.82){
    salario -= salario * 0.11;
} else{
    salario -= 570.88
}

if (salario > 1903.98){
    if(salario >= 1903.98 && salario <= 2826.65){
        salario -= (salario * 0.075) - 142.80;
    } else if (salario <= 3751.05){
        salario -= (salario * 0.15) - 354.80;
    } else if (salario <= 4664.68){
        salario -= (salario * 0.225) - 653.13;
    } else{
        salario -= (salario * 0.275) - 869.36;
    }
}

console.log("O salário final é: R$", salario);
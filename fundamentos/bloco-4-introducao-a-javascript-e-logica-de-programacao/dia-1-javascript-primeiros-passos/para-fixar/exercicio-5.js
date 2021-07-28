let estado = 'lista';

switch(estado){
    case 'aprovada':
        console.log("Você está aprovado(a).");
        break;
    case 'reprovada':
        console.log("Você está reprovado(a).");
        break;
    default:
        console.log("Você está na lista de espera.");
        break;
}
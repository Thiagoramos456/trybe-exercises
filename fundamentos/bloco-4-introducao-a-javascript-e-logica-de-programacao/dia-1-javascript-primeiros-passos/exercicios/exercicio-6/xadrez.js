let peca = "peão".toLowerCase();

switch(peca){
    case "torre":
        console.log("Pode se mover livremente na horizontal e vertical.");
        break;
    case "bispo":
        console.log("Pode se mover livremente na diagonal.");
        break;
    case "cavalo":
        console.log("Pode se mover 2 na horizontal/vertical, depois 1 pra qualquer lado.");
        break;
    case "peão":
        console.log("Pode mover 1 casa pra frente sempre. Se for a primeira vez movido, pode ser movido até 2 casas pra frente.");        
        break;
    case "rainha":
        console.log("Pode se mover livremente na horizontal, diagonal e vertical.");
        break;
    case "rei":
        console.log("Pode se mover 1 casa pra qualquer lado.");
        break;
    default:
        console.log("Não é uma peça válida.")
}
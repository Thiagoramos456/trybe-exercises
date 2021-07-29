const myName = "Thiago";
const birthCity = "São Paulo";
let birthYear = 2000;

console.log("Name: ", myName);
console.log("Birth City: ", birthCity);
console.log("Birth Year: ", birthYear);

birthYear = 1995;

console.log("*updated Birth Year: ", 1995);

//Essa linha vai dar erro porque constantes não podem ser alteradas.
birthCity = "Belo Horizonte";

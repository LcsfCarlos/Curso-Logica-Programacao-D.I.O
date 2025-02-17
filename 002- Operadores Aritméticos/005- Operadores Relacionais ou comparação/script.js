// Guardar o valor em uma variável de resultado TRUE?FALSE

let marca = "Apple";
let resultado = marca !== "Samsung";

console.log(resultado);

// = é atribuição 
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente ?

let cpfBloqueado = "121.321.523.45";
let cpfUsuario = "435.492.564.37";
let cpfComRestricao = cpfUsuario === cpfBloqueado;

console.log("Possui restrição de entrada? " + cpfComRestricao);

let cpfPermitido = "233.433.211.23";
let cpfUser = "233.433.211.22";
let cpfentradaPermitida = cpfPermitido !== cpfUser;

console.log("É um cpf inválido? " + cpfentradaPermitida);
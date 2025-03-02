//Exemplo de função
let userName = getFirstName("Luiz Carlos da Silva Filho", " ");
console.log("Bem vindo " + userName); 

userName = getFirstName("Carlos-Almeida-de-Jesus", "-");
console.log("Bem vindo " + userName);

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0];
    return firstName;
}

let nomeDeUsuario = pegarPrimeiroNome("Luiz-Carlos");

console.log("Bem vindo " + nomeDeUsuario);

function pegarPrimeiroNome(name){
    let primeiroNome = name.split("-")[1];
    return primeiroNome;
}

// Palavra function que define a função,
// depois o nome da função,
// parametros da função caso tiver,
//  depois uma váriavel dentro da função(resposável por guardar o resultado)
// retorno da função que será o resultado
// depois uma variavel para guardar o resultado atribundi a ela o resultado da função

let usuario = setarNome("Lorraine Brandão da Silva");

console.log("Bem vindo " + usuario);

function setarNome(nome){
    let nomeUser = nome.split(" ")[3]
    return nomeUser;
}
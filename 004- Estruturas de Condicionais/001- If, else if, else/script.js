// Condicional IF

let turOn = true;

if(turOn){
    console.log("executou o comando");
}

// Exemplo

let possuiOvos = false;
let itensComprados = "";

if(possuiOvos){
    itensComprados = "Leite";
}else {
    console.log("passou na seção de congelados")
    itensComprados = "Lasanha congelada";
}

console.log("item comprado: " + itensComprados);

// Exemplo 2

let nivelDeFome = 10;

if(nivelDeFome === 1){
    console.log("está com pouca fome");
} else if (nivelDeFome === 2) {
    console.log("está com muita fome");
} else {
    console.log("você comeria um boi sozinho");
}
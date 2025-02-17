// FOR

//for (let contador = 0; contador < 4; contador ++) {
//    console.log(contador);
//    console.log("aumentando o contador");
//}

for (let i = 0; i < 4; i ++){
    console.log(i);
    console.log("aumentando o contador");
}

let pontosDeVida = 0;

for (let i = 1; i <= 10; i++){
    pontosDeVida += 1;
    console.log("tomou poção mágica " + i);
}

console.log(pontosDeVida + " Totais");

let score = 0;
for (let i = 1; i <= 5; i++){
    score += 1;
    console.log("score " + i);
}

console.log("Total de score: " + score);

let totalDeCoracoes = 0;

for( let i = 1; i <= 3; i++){
    totalDeCoracoes += 1;
    console.log("Pegou " + i);
}

console.log("Total de corações: " + totalDeCoracoes);
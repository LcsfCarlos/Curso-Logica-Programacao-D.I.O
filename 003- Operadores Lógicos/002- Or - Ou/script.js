// OR ( // ) - nosso boneco so pode sair se estiver sem chuva ou com guarda chuva
let tempo = "chuva";
let item = "guarda chuva";
let podeSair = ( tempo !== "chuva") || (item === "guarda chuva");
console.log("Nosso personagem pode sair ? " + podeSair);
//torrar("pão de forma");
//torrar("pão integral");

//function torrar(pao){
//    console.log("torrada feita com " + pao);
//}

//-------------------------------------------------------------------------------------

//torrar("pão de forma", "Felipe");
//torrar("pão integral", "Janaina");

//function torrar(pao, nome){
//    console.log("torrada feita com " + pao);
//    console.log("é o pedido de " + nome);
//}

//--------------------------------------------------------------------------------------
torrar("pão integral");

function torrar(pao, valor = 99.90, nome = "Cliente"){
    console.log("torrada feita com " + pao);
    console.log("é um pedido de " + nome);
    console.log("o valor total é " + valor);
}
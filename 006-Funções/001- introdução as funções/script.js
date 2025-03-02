torrar();

function torrar(){
    console.log("torrando pão");
    injectarPao();
}

function injectarPao(){
    console.log("Preparando para injetar pão");
    console.log("Finalizado");
}
//-------------------------------------------------------------------------------//


main();

function main(){
    getData();
    checkvalues();
    sendDatabase();
}

function getData(){
    console.log("pegando dados do usuário");
}

function checkvalues(){
    console.log("validando dados do usuário");
}

function sendDatabase(){
    console.log("cadastrando dados do usuário");
}

//------------------------------------------------------------------------------//

function enviarDados(){
    let nomedoBanco =  "banco-de-dados";
    console.log("salvando dados em: " + nomedoBanco);

    if( 3 === 3){
        console.log("senha validada");
    }
}

enviarDados()
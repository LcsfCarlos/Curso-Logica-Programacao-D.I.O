//JSON- Java script Object Notation
// chave e valor com o objetivo de transferir dados

let invoice = {
    name: "Luiz Carlos",
    age: 31,
    products : {
                  0: ["mouse 2xwm", 29,90],
		  1: ["Teclado Mêcanico", 129.99],
		  2: ["Monitor", 899.99]  
},
    taxes: 98.90
}
generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`);
    console.log(`idade é " ${invoice.age}`);
    console.log("----------------");
    
   for(let index in invoice.products){
     let [productsName, productPrice] = invoice.products[index];
     console.log(`- ${productsName}: R$ ${productPrice}`)
    };
 };
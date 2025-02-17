// Estoque loja de celulares marca, memória, quantidade em estoque, cores.

console.log("Estoque dísponivel LC imports: ")

let estoqueCelular = [
    ["Samsung", "128Gb", 2, "azul", "verde"],
    ["LG", "128Gb", 2, "rosa", "amarelo"],
    ["Apple", "256Gb", 3, "branco", "preto"],
    ["Motorola", "256Gb", 4, "azul", "rosa", "roxo"]
]

let foneJbl = "Fone Lx JG";

const msgCompra = "Arraste seu produto para o carrinho de compras";

console.log(msgCompra);
console.log("O produto escolhido " + estoqueCelular[1][0] + " na cor " + estoqueCelular[1][4] + " já está disponível em suas compras");
console.log(estoqueCelular.length);
console.log("O produto " + foneJbl + " também foi adcionado ao seu carrinho de compras");
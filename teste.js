//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
// Lê os valores de entrada
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

// Função que calcula a posição final do herói
function jornadaDoHeroi(posicaoInicial, totalPassos) {
  // Calcula a posição final
  let posicaoFinal = posicaoInicial + totalPassos;
  return posicaoFinal;  // Retorna a posição final
}

// Chama a função e imprime o resultado
let posicaoFinal = jornadaDoHeroi(posicaoInicial, totalPassos);
print("Posicao final do heroi:", posicaoFinal);
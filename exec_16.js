/*
16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

//Inicializa-se a variável contadorPrimos para verificar quantos números primos foram encontrados
let contadorPrimos = 0;
let numero = 101;

//O laço de repetição while continua até chegar nos 50 números
while (contadorPrimos < 50) {
  //Variável booleana assume que o número atual é primo
  let ehPrimo = true;

  //O laço for itera através de todos os possíveis divisores do número atual, de 2 até a raiz quadrada do número atual
  for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
    // verifica se o número atual é divisível por algum dos seus possíveis divisores.
    if (numero % divisor === 0) {
      //Se for divisível sai do laço com o break
      ehPrimo = false;
      break;
    }
  }
  //Se nenhum divisor for encontrado, ehPrimo é verdadeiro, imprime o numero e incrementa contadorPrimos
  if (ehPrimo) {
    console.log(numero);
    contadorPrimos++;
  }

  numero++;
}

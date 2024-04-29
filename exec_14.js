/*
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

let total = 0;
let quantidade = 0;
let numero;

console.log("Digite os números decimais (digite 0 para sair):");

// Laço enquanto o usuário não digitar 0
while (true) {
  //Utilizando parseFloat() para entrada de número decimal  
  numero = parseFloat(prompt("Digite um número decimal:"));

  // Verifica se o número é 0 para sair do loop
  if (numero === 0) {
    break;
  }

  // Adiciona o número ao total e incrementa a quantidade
  total += numero;
  quantidade++;
}

// Calcula a média aritmética
const media = total / quantidade;

// Exibe a média no console
console.log("A média aritmética dos números digitados é:", media);

/*
Solução usando array

//Variável recebe um array vazio
let  valor = [];

//Variável que o valor ainda não foi definido
let numero;

//Variável inicializada com zero para guardar a soma dos numeros
let soma = 0;

while(numero !== 0) {
    numero = Number(prompt('Digite um numero decimal: '));
    //Coloca o numero digitado dentro do array valor
    valor.push(numero);
    soma += numero;
}

let media = soma / (valor.length -1);

console.log(`Média aritmética dos números digitados é: ${media}`);
*/
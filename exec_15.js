/*
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

// Variáveis para armazenar a soma dos produtos e soma dos pesos
let somaProdutos = 0;
let somaPesos = 0;

console.log("Digite o número decimal e seu peso (digite '0' para encerrar):");

//Laço enquanto o usuário não digitar 0
while (true) {
    const numero = parseFloat(prompt("Digite o número decimal: "));
    
    // Verifica se o número é zero para encerrar o loop
    if (numero === 0) {
        break;
    }
    
    const peso = parseFloat(prompt("Digite o peso do número: "));
    
    // Adiciona o produto do número pelo peso à soma dos produtos
    somaProdutos += numero * peso;
    
    // Adiciona o peso à soma dos pesos
    somaPesos += peso;
}

// Calcula a média ponderada
const mediaPonderada = somaProdutos / somaPesos;

//Imprime no console a média ponderada com duas casa decimais
console.log("A média ponderada dos números e pesos fornecidos é:", mediaPonderada.toFixed(2));

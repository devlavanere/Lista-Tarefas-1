/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

//Utilizando parseInt() para entrada de um numero inteiro
let numero = parseInt(prompt('Digite um numero inteiro: '));

//Laço de repetição para imprimir no console o numero digitado 10 vezes
for(let i = 1; i <= 10; i++){
    console.log(numero);
}


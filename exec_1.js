/*
1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
 */

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

//Entrada de dados usando parseFloat para entrada de números reais 
let temperatura_celsius = parseFloat(prompt('Digite a temperatura em graus Celsius: '));

//Calculo para transformar Celsius em Fahrenheit
let transforma_celsius_fahrenheit = temperatura_celsius * 1.8 + 32;

//Saída do resultado da tranformação no console
console.log("A temperatura em Fahrenheit é: ", transforma_celsius_fahrenheit);


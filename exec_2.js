/*
2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

//Utilizando parseInt() para entrada de números inteiros
let total_eleitores = parseInt(prompt('Digite o numero de eleitores: '));
let votos_brancos = parseInt(prompt('Digite o numero de votos brancos: '));
let votos_nulos = parseInt(prompt('Digite o numero de votos nulos: '));
let votos_validos = parseInt(prompt('Digite o numero de votos válidos: '));

//Cálculo dos percentuais
let percentual_votos_brancos = (votos_brancos / total_eleitores) * 100;
let percentual_votos_nulos = (votos_nulos / total_eleitores) * 100;
let percentual_votos_validos = (votos_validos / total_eleitores) * 100;

//Exibição do resultado dos pencentuais no console
console.log(`O percentual de votos brancos é ${percentual_votos_brancos}%`);
console.log(`O percentual de votos nulos é ${percentual_votos_nulos}%`);
console.log(`O percentual de votos válidos é ${percentual_votos_validos}%`);


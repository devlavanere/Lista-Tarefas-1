/*
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

//Utilizando parseInt() para entrada de números inteiros
let numero_1 = parseInt(prompt('Digite o primeiro número: '));
let numero_2 = parseInt(prompt('Digite o segundo número: '));
let numero_3 = parseInt(prompt('Digite o terceiro número: '));
let numero_4 = parseInt(prompt('Digite o quarto número: '));

//Varável para guardar os três primeiros numeros originais
let soma_numeros = numero_1 + numero_2 + numero_3;

//Processamento dos cálculos pedidos nas questões
numero_1 += 25;
numero_2 *= 3;
numero_3 *= 0.12;
numero_4 += soma_numeros;

//Saída de dados no console
console.log(numero_1);
console.log(numero_2);
console.log(numero_3);
console.log(numero_4);



//Forma 2
/*let soma_numero_1 = numero_1 + 25;
let multiplica_numero_2 = numero_2 * 3;
let percentual_numero_3 = numero_3 * 0.12;
let soma_valores_originais = numero_1 + numero_2 + numero_3 + numero_4;

console.log(`${numero_1} + 25 = ${soma_numero_1}`);
console.log(`${numero_2} * 3 = ${multiplica_numero_2}`);
console.log(`12% de ${numero_3} = ${percentual_numero_3}`);
console.log(`${numero_1} + ${numero_2} + ${numero_3} + ${numero_4} = ${soma_valores_originais}`);*/

//Forma 3
/*numero_4 += numero_1 + numero_2 + numero_3;
numero_1 += 25;
numero_2 *= 3;
numero_3 *= 0.12;

console.log(numero_1);
console.log(numero_2);
console.log(numero_3);
console.log(numero_4);*/


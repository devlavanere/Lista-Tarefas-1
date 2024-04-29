/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

//Utilizando parseFloat para entrada de numeros reais
let A = parseFloat(prompt('Digite o valor do lado A: '));
let B = parseFloat(prompt('Digite o valor do lado B: '));
let C = parseFloat(prompt('Digite o valor do lado C: '));

//Cria a variável tipo, mas não define nenhum valor para ela
let tipo;

// Verificar se os lados fornecidos formam um triângulo
if (A < B + C && B < A + C && C < A + B) {
    // Verificar o tipo de triângulo
    if (A === B && B === C) {
        tipo = "Triângulo equilátero";
    } else if (A === B || A === C || B === C) {
        tipo = "Triângulo isósceles";
    } else {
        tipo = "Triângulo escaleno";
    }
}
//Imprimir a mensagem no console de acordo com o tipo de triângulo
console.log(tipo);

/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
Código de Origem:
1- Sul | 2- Norte | 3- Leste | 4- Oeste | 5 ou 6 - Nordeste | 7, 8 ou 9- Sudeste | 
10 até 20- Centro-Oeste | 25 até 50- Nordeste | Fora dos Intervalos- Produtos Importados

*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

//Utilizando parseInt() para entrada de um número inteiro
let codigo_origem = parseInt(prompt('Digite o código de origem do produto: '));

let regiao = '';

//Condição para interligar código de origem a região
if(codigo_origem === 1){
    regiao = 'Sul';
} else if(codigo_origem === 2) {
    regiao = 'Norte';
} else if(codigo_origem === 3) {
    regiao = 'Leste';
} else if(codigo_origem === 4) {
    regiao = 'Oeste'
} else if((codigo_origem === 5 || codigo_origem === 6) || (codigo_origem >= 25 && codigo_origem <= 50)) {
    regiao = 'Nordeste';
} else if(codigo_origem >= 7 && codigo_origem <= 9) {
    regiao = 'Sudeste';
} else if(codigo_origem >= 10 && codigo_origem <= 20) {
    regiao = 'Centro-Oeste';
} else {
    console.log('Produto Importado');
}

//Imprime no console o código digitado e sua respectiva Região
console.log("Região =", regiao);


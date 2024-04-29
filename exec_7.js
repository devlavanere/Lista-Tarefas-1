/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

//Utilizando parseFloat para entrada de um numero real
let macas_compradas = parseFloat(prompt('Digite a quantidade de maçãs compradas: '));

//Variável foi criada, mas nenhum valor foi definido
let valor_total;

//Condição para saber se foram compradas menos que uma dúzia ou mais de uma dúzia
if(macas_compradas < 12) {
    valor_total = macas_compradas * 0.30;
}
else {
    valor_total = macas_compradas * 0.25;
}

//Imprimindo o valor total no console
console.log("O valor total da compra é: ", valor_total);
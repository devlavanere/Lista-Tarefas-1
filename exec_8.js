/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

//Utilizando parseInt() para entrada de números inteiros
let valor_1 = parseInt(prompt('Digite o primeiro valor: '));
let valor_2 = parseInt(prompt('Digite o segundo valor: '));

//Variável foi criada, mas nenhum valor foi definido
let ordem_crescente;

//Condicao para estabelecer a ordem crescente
if(valor_1 < valor_2) {
    ordem_crescente = valor_1 +" -> "+ valor_2;
}
else{ 
    ordem_crescente = valor_2 +" -> "+ valor_1;
}

//Imprime no console os valores em ordem crescente
console.log(ordem_crescente);
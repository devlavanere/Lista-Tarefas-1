/*
4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

//Utilizando parseFloat para entrada de numeros reais
let nota_1 = parseFloat(prompt('Digite a primeira nota: '));
let nota_2 = parseFloat(prompt('Digite a segunda nota: '));

//Processamento cálculo da soma e da média
let soma = nota_1 + nota_2;
let media = soma / 2;

//Variável inicializada com uma string vázia
let mensagem = "";

//Condicao para a exibição da mensagem
if(media >= 6){
    mensagem = "PARABÉNS! Você foi aprovado";
}

//Saída no console
console.log(mensagem);
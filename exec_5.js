/*5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

//Utilizando parseFloat para entrada de numeros reais
let nota_1 = parseFloat(prompt('Digite a primeira nota: '));
let nota_2 = parseFloat(prompt('Digite a segunda nota: '));

//variável inicializada com uma string vazia
let mensagem = "";

//Processamento cálculo da soma e da média
let soma = nota_1 + nota_2;
let media = soma / 2;

//Condição para seguir o fluxo
if(media >= 6){
    mensagem = "PARABÉNS! Você foi aprovado";
}
else{
    mensagem = "Você foi REPROVADO! Estude mais";
}

//Saída no console
console.log(mensagem);
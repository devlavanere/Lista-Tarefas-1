/* 
11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

console.log('Digite uma série de valores para encerrar digite "0" ou um numero Negativo:')
console.log('***************************************************************************');

//Laço deve continuar enquanto verdadeiro
while(true) {
    //Utilizando parseInt() para entrada do valor inteiro
    const valor = parseInt(prompt('Digite um valor inteiro: '));
    //Caso o valor inteiro seja 0 ou Negativo o break encerra o loop
    if(valor <= 0){
        console.log('Encerrando...')
        break;
    }
    else if(valor % 2 === 0) {
        console.log('Par');
    }
    else{
        console.log('Ímpar');
    }
}
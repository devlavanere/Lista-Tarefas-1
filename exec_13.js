/*
13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/

//Cria uma função chamada 'prompt' que permite solicitar entrada do usuário de forma síncrona
const prompt = require('prompt-sync')();

let contador = 0;

// Loop externo para pegar os cinco números
while (contador < 5) {
    //Utilizando parseInt() para entrada de números inteiros
    let N = parseInt(prompt('Digite um número: '));
    
    // Loop para calcular e mostrar a tabuada de 1 até N
    for (let i = 1; i <= N; i++) {
        // Calculando o resultado da multiplicação
        let resultado = i * N;
        
        // Exibindo a multiplicação e seu resultado usando template string
        console.log(`${i} x ${N} = ${resultado}`);
    }
    
    contador++;
}
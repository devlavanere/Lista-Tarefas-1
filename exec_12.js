/*12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.*/

//Laço for percorrer numeros de 1000 a 1999
for(let numero = 1000; numero <= 1999; numero++) {
    //Condição para que os números divididos por 11 e tenham resto igual a 5 sejam impressos no console
    if(numero % 11 === 5) {
        console.log(numero);
    }
}
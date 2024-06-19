function countChars(frase, c){
    let quant = 0;
    for(let i = 0; i <= frase.length; i++){
        if(frase.charAt(i)===c){
            quant++;
        }
    }
    return quant;
}

frase = prompt("Escreva a palavra");
c = prompt("Escreva o caractere");


console.log(countChars(frase, c));
function range(min, max, i){
    if(i>0){
        let array = Array(parseInt(((max-min)/i)+1));

        for(let j = 0; j<array.length;j++){
            array[j] = min;
            min += i;
        }
        return array;
    }else{
       reportError("intervalo de variação inserido inválido");
    }
}


num1 = +prompt("Indique o menor numero");
num2 = +prompt("Indique o maior numero");
i = +prompt("Indique o periodo de variação");
console.log(range(num1, num2, i));
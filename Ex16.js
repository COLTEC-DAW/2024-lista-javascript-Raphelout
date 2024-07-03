function fazTrem(matriz){
    matriz = matriz;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[0].length; j++){
            matriz[i][j] = somaIndices(i, j);
        }
    }
    return matriz;
}

const somaIndices = (number1, number2) => {
    return number1+number2;
}

let matriz = Array(5).fill(Array(5));
console.log(fazTrem(matriz));
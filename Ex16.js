function fazTrem(linhas, colunas, metodo){
    let matriz = new Array(linhas).fill().map(() => new Array(colunas));

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[0].length; j++){
            matriz[i][j] = metodo(i, j);
        }
    }
    return matriz;
}

const somaIndices = (number1, number2) => {
    return number1+number2;
}
const multiplicaIndices = (number1, number2) => {
    return number1 * number2;
}
const comparaIndices = (number1, number2) => {
    return (number1==number2)? 1:0;
}
const manipulaIndices = (number1, number2) => {
    return number1^2 / (number2+1); 
}
const manipula2Indices= (number1, number2) => {
    //se i for maior, retorna 1, se for menor, retorna 5, se for igual, retorna 0
    return (number1 > number2)? 1 : ((number1<number2)? 5:0); 
}
let matriz;

let linhas = +prompt("Dê o número de linhas");
let colunas = +prompt("Dê o número de colunas");

console.log(fazTrem(linhas, colunas, somaIndices));
console.log(fazTrem(linhas, colunas, multiplicaIndices));
console.log(fazTrem(linhas, colunas, comparaIndices));
console.log(fazTrem(linhas, colunas, manipulaIndices));
console.log(fazTrem(linhas, colunas, manipula2Indices));


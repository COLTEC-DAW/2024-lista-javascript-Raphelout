function reverseArray(array){
    let arrayReversa = Array(array.length);
    for(let i = 0; i < array.length; i++){
        arrayReversa[i] = array[array.length-1-i];
    }
    return arrayReversa;
}

array = Array((parseInt(prompt("Digite o tamanho da array"))));

for(let i = 0; i<array.length; i++){
    array[i] = prompt("Insira o conteúdo do índice " + i);
}


console.log(reverseArray(array));
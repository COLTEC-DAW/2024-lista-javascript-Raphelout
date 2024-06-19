function toList(array){
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }   

    return list;
}

array = Array((parseInt(prompt("Digite o tamanho da array"))));
for(let i = 0; i<array.length; i++){
    array[i] = prompt("Insira o conteúdo do índice " + i);
}

console.log(array);
console.log(toList(array));

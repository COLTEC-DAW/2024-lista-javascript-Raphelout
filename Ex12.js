function ordenaVetor(array, criterio){
    for(let i = array.length; i > 0; i--){
        for(let j = 0; j < i-1; j++){
            //se o elemento da esquerda for maior que o da direita
            if(criterio(array[j], array[j+1])){ 
                //trocar de lugar
                //console.log(criterio.name + ": troquei o " + array[j] + " de lugar com o " + array[j+1]);
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

const Crescente = (num1, num2) => {
    return num1>num2;
}
const Decrescente = (num1, num2) => {
    return num1<num2;
}
const CrescenteImpar = (num1, num2,) => {
    if(num1%2==0 && num2%2!=0){ //se o primeiro for par e o segundo for impar...
        return true;
    
    }else if(num1%2!=0 && num2%2!=0 && num1 > num2){ //se os dois forem impares e o primeiro for maior que o segundo...
        return true;
    }
    return false;
}
const DecrescentePar = (num1, num2) => {

    if(num1%2!=0 && num2%2==0){ //se o primeiro for impar e o segundo for par...
        return true;
    
    }else if(num1%2==0 && num2%2==0 && num1 < num2){ //se os dois forem pares e o primeiro for menor que o segundo...
        return true;
    }
    return false;
}


let vetor;
if(prompt("Digite 1 caso queira usar um vetor padrão")=="1"){
    vetor = [7, 6, 3, 2, 9, 5, 13, 12, 17, 24, 4, 2.5];
}else{
    vetor = Array((parseInt(prompt("Digite o tamanho do vetor"))));
    for(let i = 0; i<vetor.length; i++){
        vetor[i] = prompt("Insira o conteúdo do índice " + i);
    }
}
    


console.log("Normal:  ");
console.log(vetor);

console.log("Crescente:  ");
console.log(ordenaVetor(vetor, Crescente));

console.log("Decrescente:  " );
console.log(ordenaVetor(vetor, Decrescente));

console.log("CrescenteImpar:  " );
console.log(ordenaVetor(vetor, CrescenteImpar));

console.log("DecrescentePar:  " );
console.log(ordenaVetor(vetor, DecrescentePar));
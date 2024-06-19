function deepEquals(objeto, objeto2){
    let arrayProps = Object.keys(objeto);
    let arrayProps2 = Object.keys(objeto2);

    let tamanho = (arrayProps.length>=arrayProps2.length)?arrayProps.length:arrayProps2.length;

    for(let i = 0 ; i < tamanho; i++){
        if(arrayProps[i]!==arrayProps2[i]){
            return false;
        }
    }
    return true;
}

objeto = {Nome: "roberto", Idade: 15 };
objeto2 = {Nome: "roberto", Idade: 15,bobage: 1};

deepEquals(objeto, objeto2);
function escreveHash(number){
    let hashs = "#";
    for(let i = 0; i <=  number; i++){
        hashs += "#";
    }
    console.log(hashs);
    return hashs;
}

var quantLinhas = prompt("escreva a quantidade de linhas faz favor :)") -2 ;

for(let linhaAtual = 0; linhaAtual <= quantLinhas; linhaAtual++){
    escreveHash(linhaAtual);
}
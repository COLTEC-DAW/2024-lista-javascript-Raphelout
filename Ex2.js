let quantLinhas = prompt("Escreva a quantidade de linhas pfvrr", "3");
let frase = "# # # # ";
for(let i = 0; i < quantLinhas; i++){
    switch(i%2){
        case 0:
            frase = "# # # # ";
        break;
        default:
            frase = " # # # #";
        break;
    }
    console.log(frase);
}
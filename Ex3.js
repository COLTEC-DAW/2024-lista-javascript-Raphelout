function analisaPalindromo(palavra){
    let index1 = 0;
    let index2 = palavra.length-1;
    for(let i = 0; i < palavra.length/2; i++){
        if(palavra.charAt(index1 )=== palavra.charAt(index2)){
            index1++;
            index2--;
            
        }else{
            console.log("num é palindromo");
            return false;
        }
    }
    return true;
}

while(true){
    

    let palavra  = prompt("mim da uma palavra pra eu vê se é palindromo");
    palavra = palavra.toLocaleLowerCase();
    if(analisaPalindromo(palavra)){
        console.log("é palindromo")
    }
}
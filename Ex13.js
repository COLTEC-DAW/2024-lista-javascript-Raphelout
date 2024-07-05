
const letters = ['a', 'b', 'c', 
                'd', 'e', 'f', 
                'g', 'h', 'i', 
                'j', 'k', 'l',
                'm', 'n', 'o', 
                'p', 'q', 'r', 
                's', 't', 'u', 
                'v', 'w', 'x', 
                'y', 'z']; //25 //length 26


function criptografar(string, metodo){
    metodo(string, 3);
}

const cifraDeCesar = (string) => {

    let diferenca = +prompt("Digite a diferença, os números podem ser negativos para regredir no alfabeto");
    string = string.toLowerCase();
    let resultado = "";
    for(let i = 0; i < string.length; i++){

        let indice = letters.indexOf(string[i]);

        if(indice == -1){
            resultado += string[i];
            console.log(resultado);
        }else{
            let indiceNovo = indice + diferenca;

            while(indiceNovo >= letters.length){
                indiceNovo -= letters.length;
            }
            
            string[i] = letters[indiceNovo]; 
            resultado += letters[indiceNovo];
            console.log(resultado);
        }
        
    }
    return resultado.toUpperCase();
}

string = prompt("Digite a palavra para criptografar");
console.log(criptografar(string, cifraDeCesar));
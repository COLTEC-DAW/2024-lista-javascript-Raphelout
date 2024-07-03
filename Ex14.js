
function verificaNumero(number, criterio){
    return criterio(number);
}
const seEhPrimo = (number)=>{
    for(let i = 2; i < number; i++){
        
        if((number%i)==0){
            return false;
        }
    }
    return true;
};

const seEhImpar = (number)=>{return number%2!=0};

while(true){
    let number = +prompt("Digite o número que deseja verificar, ou 0 para sair");
    if(number == 0){
        break;
    }
    console.log(seEhPrimo.name);
    console.log(verificaNumero(number, seEhPrimo));
    console.log(seEhImpar.name);
    console.log(verificaNumero(number, seEhImpar));
}

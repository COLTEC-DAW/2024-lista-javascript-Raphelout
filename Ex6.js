
function mod(number, mod){
    return number%mod===0;
}
function mod2(number){
    return mod(number, 2);
}

number = +prompt("Meta o numero para dividir");
modifier = +prompt("Meta o divisor");

console.log(mod2(number));
console.log(mod(number, modifier));
function min(a, b){
    return (a>=b)?b:a;
}
function max(a, b){
    return (a>=b)?a:b;
}

a = +prompt("Escreva o primeiro número");
b = +prompt("Escreva o segundo número");

console.log("O maior número é " + max(a, b));
console.log("O menor número é " + min(a, b));
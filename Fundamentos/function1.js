//função sem retorno
function ImprimirSoma(a, b) {
    console.log(a + b);
}

ImprimirSoma(2) // resultará em NaN
ImprimirSoma(2, 4, 7, 1, 10, 40); 
/*O programa fará a soma dos dois primeiros números e irá ignorar o restante*/


//função com retorno
function Soma(a, b = 0) {
    return a + b
}
console.log(Soma(2, 3));
console.log(Soma(2));
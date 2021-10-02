// Armazenando função em uma variável

const ImprimirSoma = function (a, b) {
    console.log(a + b);
}

ImprimirSoma (2, 3)

//Armazenando um arrow function em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(4, 5));

//retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(8, 5));

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!')
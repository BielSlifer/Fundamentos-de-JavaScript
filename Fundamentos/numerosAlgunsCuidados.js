console.log(7 / 0) //números dividos por 0, retornam o Type Infinity
console.log("10" / 2) /*mesmo sendo String, tendo um número no valor, 
vai ser feita essa operação*/
console.log("Show" * 2) /*Em algumas linguagens repetiria "Show" 2 vezes,
em JavaScript isso não acontece, retorna um NaN*/
console.log(0.1+0.7) //não vai gerar 0.8, JS tem algumas imprecisões nesse caso
//console.log(10.toString()) não é possivel executar no valor literal, apenas Number
console.log((10.345).toFixed(2)) //é possível fazer essa operação
console.log('3'+2)//faz uma concatenação pelo operador + concatenar strings


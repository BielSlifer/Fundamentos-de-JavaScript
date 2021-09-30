/*Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. 
Não é um objeto de função.*/

/*Ao contrário de outros objetos globais, Math não é um construtor. 
Todas as propriedades e métodos de Math são estáticos. 
Você pode referenciar a constante PI como Math.PI
e você pode chamar a função de seno como Math.sin(x), onde x  é o argumento do método. 
Constantes são definidas com a precisão total de números reais em JavaScript.*/



const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
/* Math.PI retorna o valor de PI = 3.14
Math.pow faz uma exponenciação. 
Math.pow(base, expoente) */

console.log(area)
console.log(typeof Math)

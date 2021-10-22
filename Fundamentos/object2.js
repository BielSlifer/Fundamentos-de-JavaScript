console.log(typeof Object); //retorna function.
console.log(typeof new Object); //cria um novo objeto e retorna object.

const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto());
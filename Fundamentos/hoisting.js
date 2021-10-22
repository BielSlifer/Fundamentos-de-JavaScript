console.log('a =', a);
var a = 2
console.log('a =', a);
/*Em JavaScript a variável é 'içada para cima' sem gerar erro caso tenha sido definida abaixo. 
Não tem uso práico, apenas é possível em JS.*/

function teste() {
    console.log('a =', a);
    var a = 2
    console.log('a =', a);
}

teste(); //na função ela sofre o içamento da mesma forma

console.log('b =', b);
let b = 2
console.log('b =', b);
//Variável Let gera erro
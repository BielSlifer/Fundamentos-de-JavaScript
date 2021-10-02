/* Aqui você cria um objeto, esse objeto é armazenado em um local na memoria,
e a variável aponta para o endereço que se encontra o objeto.
const a = { nome: "João"};

Aqui você não consegue alterar a variável, porque ela é uma constante, e no caso você esta 
tentando atribuir o endereç0o de outro objeto para ela.
a = {};
 
Já aqui você consegue alterar o atributo 'nome', porque se trata do atributo do objeto, 
e não da variável, a variável simplesmente aponta pro local onde o objeto está.
a.nome = "Maria"; */


let valor //não inicializada
console.log(valor); //retorna Undefined

valor = null //ausência de valor
console.log(valor);
/*console.log(valor.toString()); 
retorna erro, tomar cuidado com variaveis nulas, ao tentar acessar seu valor*/
console.log();

const produto = {}
console.log(produto.preco); 
/* vai resultar em 'undefined' porque o preco do produto não foi 
definido, caso tente acessar outra coisa após o produto, vai gerar um erro porque se esta tentando
acessar a propriedade de algo que não foi definido.*/

console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined //evite atribuir o valor undefined
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);
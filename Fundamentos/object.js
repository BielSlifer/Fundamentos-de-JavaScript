/*O construtor Object cria um wrapper de objeto para o valor fornecido. 
Se o valor for null ou undefined, ele criará e retornará um objeto vazio, 
caso contrário, retornará um objeto de um Type que corresponde ao dado valor. 
Se o valor já for um objeto, ele retornará o valor.
Quando chamado em um contexto não-construtor, o object se comporta de forma idêntica
ao new Object ().*/

const prod1 = {} //você pode declarar objetos literais usando chaves.
prod1.nome = 'Celular Ultra Mega' //objetos são um conjunto de chave e valor
prod1.valor = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar usar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: '79.90'
}
prod2['Desconto Legal'] = 0.40
console.log(prod2);

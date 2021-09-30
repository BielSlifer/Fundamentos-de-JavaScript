/*Arrays são objetos semelhantes a listas que vêm com uma série de métodos embutidos para realizar
operações de travessia e mutação. Nem o tamanho de um array JavaScript nem os tipos de elementos são
fixos. Já que o tamanho de um array pode ser alterado a qualquer momento e os dados podem ser
armazenados em posições não contíguas, arrays JavaScript não tem a garantia de serem densos; 
isso depende de como o programador escolhe usá-los. 
De uma maneira geral, essas são características convenientes, 
mas, se esses recursos não são desejáveis para o seu caso em particular, 
você pode considerar usar arrays tipados.*/

//Array permitem você agrupar elementos de forma linear.
//Os elementos de um array são acessados por indíces a partir do indíce0.

/*você pode criar arrays de forma literal declarando
colchetes separando os valores por vírgula.*/
const valores = [7.7, 8.9, 6.3, 9.2] 
console.log(valores[0], valores[3]); //exibe os valores da primeira e quarta posição.
console.log(valores[4]); /*em JavaScript não retorna erro chamar um indíce inexistente, ele 
marca como Undefined.*/

valores[4] = 10
console.log(valores);

//"array.length" exibe quantos elementos há dentro do array.

/*um array pode comportar vários tipos de elementos,
mas o ideal é ter um array pra cada tipo de elemento*/
valores.push({id: 3}, null, false, 'teste');
console.log(valores);

/*O método pop() remove o último elemento de um array e retorna aquele elemento.*/
console.log(valores.pop());

//"delete" exclui o indíce definido
delete valores[0];

//em JS Array é um tipo object
console.log(typeof valores);

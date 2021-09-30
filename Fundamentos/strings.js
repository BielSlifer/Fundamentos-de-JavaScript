const nome = "Gabri3l"

console.log(nome.charAt(4)) 
/*string.charAt(value) retorna a letra que na posição demarcada. 
Começando no indíce 0. */
console.log(nome.charAt(7)); 
/*se o indíce for uma posição não existente na palavra, 
não gerará um erro, vai resultar em nada. */
console.log(nome.charCodeAt(2)); 
//string.charCodeAt(value) exibe o valor unicode do indíce indicado, começando em 0.
console.log(nome.indexOf("r"))
//string.indexOf() exibe o indíce da letra demarcada.
console.log(nome.substring(2));
//string.substring() exibe o resto da palavra a partir do indíce demarcado
console.log(nome.substring(0, 3));
//string.substring(0, 0) exibe a palavra do indíce marca até o penúltimo do indíce descrito.
console.log('O '.concat(nome).concat(' não é gado!'));
/*.concat faz a concatenação de strings. 
Também é possível concatenar usando strings literais sem o .concat. 
Preferencia por esse segundo método. */
console.log(nome.replace(3, 'e'));
//string.replace(0, 0) pega o char descrito e substitui por um indicado.
console.log('Gabriel,Kennedy Gado,Douglas GADO'.split(','))
//.split() trasnforma as strings entre aspas simples em arrays
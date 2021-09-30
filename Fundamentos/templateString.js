/*Template strings são envolvidas por (acentos graves) (` `) em vez de aspas simples ou duplas. 
Template strings podem possuir marcadores de posição. 
Estes são indicados por um cifrão seguido de chaves (${expressão}). 
As expressões nos marcadores de posição, bem como o texto em volta delas são passados a uma função. 
A função padrão apenas concatena as partes em uma string única. 
Se existir uma expressão precedendo a template string (função tag exemplo), 
a template string é definida como "string de modelo marcada". 
No caso, a expressão tag (geralmente uma função) é chamada pela template string processada, 
que você pode manipular antes de produzir o resultado.*/

const nome = 'Rebecca'

const concatenacao = 'Oi ' + nome + '!'
console.log(concatenacao)
const template = `
    Olá 
    ${nome}!`
    console.log(template);

//expressões...
console.log(`1 + 1 = ${1 + 1}`);

/*dentro de uma expressão você pode chamar uma função, e dentro do contexto de uma template string, 
isso é possível*/

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);
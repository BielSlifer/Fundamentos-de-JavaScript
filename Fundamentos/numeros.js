const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(typeof peso1, typeof peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2)) 
/* Number.isInteger testa se o value passado é um inteiro.
Retornando true and false (verdadeiro e falso, respectivamente) */

const avaliacao1 = 9.871
const avaliacao2 = 6.871

console.log(avaliacao1, avaliacao2)
console.log(typeof avaliacao1, typeof avaliacao2)

console.log(Number.isInteger(avaliacao1))
console.log(Number.isInteger(avaliacao2))

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(total)
console.log(media.toFixed(2)) //var.toFixed(value) mostra um numero definido de casas decimais
console.log(media.toString(2)) //number.toString converte em binário
console.log(typeof media)
console.log(typeof Number)

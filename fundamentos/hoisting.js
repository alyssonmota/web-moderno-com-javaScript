// Não há motivos para usar hoisting. Isso só complica a leitura do código. Mas é bom saber que existe.
// Só acontece com o uso de var, por isso usar let

console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)
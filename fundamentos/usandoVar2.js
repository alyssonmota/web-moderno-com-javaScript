// Variáveis definidas com var possuem escopo APENAS dentro de funções e no escopo global
// SEMPRE FUJA DO ESCOPO GLOBAL

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)
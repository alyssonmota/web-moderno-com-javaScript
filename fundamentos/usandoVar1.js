// Variáveis definidas com var possuem escopo APENAS dentro de funções e no escopo global
// SEMPRE FUJA DO ESCOPO GLOBAL

{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)
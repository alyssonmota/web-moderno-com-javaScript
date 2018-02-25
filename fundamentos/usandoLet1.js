// Variáveis definidas com let possuem escopo dentro de funções, dentro de blocos e no escopo global
// let foi criado para eliminar os problemas de escopo que var possui

let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)
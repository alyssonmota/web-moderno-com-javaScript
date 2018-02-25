// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// O segundo parâmetro é undefined, então o resultado é NaN
imprimirSoma(2)

// Somente os dois primeiros parametros são pegos, o resto é ignorado
imprimirSoma(2, 10, 4, 5, 6, 7, 8)

// Como os paramtros são undefined, o resultado é NaN
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
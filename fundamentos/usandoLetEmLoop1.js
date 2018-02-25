// Por let também possuir escopo em blocos, após o laço a variável não continuará visivel no escopo global

for(let i = 0; i < 10; i++) {
    console.log(i)
}

console.log("Valor de i depois do for", i) // Dá erro
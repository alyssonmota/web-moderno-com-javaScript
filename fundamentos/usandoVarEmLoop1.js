// Por var não possuir escopo em blocos, após o laço a variável continuará visivel no escopo global

for(var i = 0; i < 10; i++) {
    console.log(i)
}

console.log("Valor de i depois do for", i)
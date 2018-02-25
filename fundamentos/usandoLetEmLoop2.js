// Com let há a memoria de quando a função foi criada e qual era o seu parâmetro

const funcs = []

for(let i = 0; i < 10; i++) {
    funcs.push(() => console.log(i))
}

funcs[3]()
funcs[9]()
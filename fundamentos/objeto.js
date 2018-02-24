// Objetos literais em javaScript são criados entre chaves
// Um objeto em javaScript é uma coleção de chave/valor
// Muito importante: Objetos javaScript não são o mesmo que JSON
const prod1 = {}

// Propriedades podem ser criadas dinamicamente, sem serem explicitamente declaradas
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 1000.99

// Propriedades tambem podem ser criadas dessa forma
prod1['Desconto legal'] = 0.40 // Evitar atributos com espaços

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod1)
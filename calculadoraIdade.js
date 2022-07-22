function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome:'Charliane',
    idade: 19,
};

const pessoa2 = {
    nome: 'Bruna',
    idade: 25
};


const animal = {
    nome: 'Alefy',
    idade: 18,
    raca: 'Bruci',
};

console.log(calculaIdade.apply(pessoa1, [5]))

// console.log(calculaIdade.call(pessoa1, 5))
class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome) {this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco) {this.preco = pPreco}

    calcularDesconto(){
        this.preco = this.preco - 10
    }
}

var obj_livro1 = new Livro("Use a cabeça Java", 200)
obj_livro1.calcularDesconto()
console.log("o Livro: "+ obj_livro1.nome + " custa " + obj_livro1.preco + " reais ")
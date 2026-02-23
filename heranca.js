class Personagem {
    #vida;
    constructor(nome, poderDeAtaque, vida) {
        this.nome = nome;
        this.poderDeAtaque = parseInt(poderDeAtaque);
        this.#vida = parseInt(vida);
    }
    receberDano(valor) {
        let value = this.#vida - valor;
        this.#vida = value
    }
    exibirStatus() {
        if (this.#vida < 0) {
            return console.log(`Seu personagem morreu`);
        } else {
            let a = this.#vida;
            return console.log(`O ${this.classe} tem ${a} de vida restante`);
        }
    }
}

//outra classe

class personagemGuerreiro extends Personagem {
    constructor(nome, poderDeAtaque, vida, forcaFisica) {
        super(nome, poderDeAtaque, vida);
        this.classe = 'Guerreiro';
        this.forcaFisica = parseInt(forcaFisica);
    }
    atacar(alvo) {
        let dano = this.poderDeAtaque + this.forcaFisica

        return alvo.receberDano(dano);
    }
}
class personagemMago extends Personagem{
    constructor(nome, poderDeAtaque, vida,poderMagico) {
        super(nome, poderDeAtaque, vida)
        this.classe = "Mago"
        this.poderMagico = parseInt(poderMagico)
    }
    atacar(alvo) {
        let dano = this.poderDeAtaque + (this.poderMagico * 2)

        return alvo.receberDano(dano)
    }
}

const guerreiro = new personagemGuerreiro('joão',68,6000,600)
const mago = new personagemMago('pablo', 40, 5000, 500, 232)

mago.atacar(guerreiro)
guerreiro.atacar(mago)

mago.exibirStatus()

guerreiro.exibirStatus()

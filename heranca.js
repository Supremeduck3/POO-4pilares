class Personagem {
    #vida;
    constructor(nome, poderDeAtaque, vida) {
        this.nome = nome;
        this.poderDeAtaque = parseInt(poderDeAtaque);
        this.#vida = parseInt(vida);
    }
    receberDano(valor) {
        let a = this.#vida - valor;
        if (a < 0) {
            return `Seu personagem morreu`;
        } else {
            return `Seu personagem recebeu ${valor} de dano,restam ${a} de vida`;
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

const guerreiro = new personagemGuerreiro('joão',68,6000,150)
const mago = new personagemMago('pablo', 40, 5000, 500, 232)

console.log(mago.atacar(guerreiro))
console.log(guerreiro.atacar(mago))

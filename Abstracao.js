class Personagem{
    #vida
    constructor(nome, poderDeAtaque, vida) {
        this.nome = nome;
        this.poderDeAtaque = parseInt(poderDeAtaque);
        this.#vida=parseInt(vida)
    }
    receberDano(valor) {
        let a = this.#vida - valor
        if (a < 0) {
            return `Seu personagem morreu`
        } else {
            return `Seu personagem recebeu ${a} de dano`
        }
    }
}

const person = new Personagem("joão", 10, 100)

console.log(person)

console.log(person.receberDano(25))

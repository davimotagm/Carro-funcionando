let carro = {
    estaLigado: false,
    velocidade: 0,
    velocidadeMax: 160,
    velocidadeMin: 0,

    ligar: function () {
        if (this.estaLigado) {
            return "Veículo já está ligado"
        }
        this.estaLigado = true
        return "Ligado"
    },

    desligar: function () {
        if (!this.estaLigado) {
            return "Veículo já está desligado"
        }
        this.estaLigado = false
        return "Desligado"
    },

    acelerar: function () {
        if (this.estaLigado == true) {
            if ((this.velocidade += 10) <= this.velocidadeMax) {
                return "Velocidade aumentada";
            }
            if (this.velocidade > this.velocidadeMax) {
                let velocidadeUltrapassada = (this.velocidade - this.velocidadeMax)
                this.velocidade -= velocidadeUltrapassada
                return "Velocidade no limite"
            }
        } else {
            return "Ligue o veículo para acelerar"
        }
    },

    frear: function () {
        if (this.estaLigado == true) {
            if ((this.velocidade -= 5) >= this.velocidadeMin) {
                return "Velocidade reduzida"
            }
            if (this.velocidade < this.velocidadeMin) {
                this.velocidade = (this.velocidade + Math.abs(this.velocidade))
                return "Velocidade Mínima Atingida"
            }
        } else {
            return "Acelere o veículo para frear"
        }

    }
}


// console.log(carro.ligar())

// console.log(carro.acelerar())
// console.log(carro.velocidade)
// console.log(carro.acelerar())
// console.log(carro.velocidade)


// console.log(carro.frear())
// console.log(carro.velocidade)
// console.log(carro.frear())
// console.log(carro.velocidade)
// console.log(carro.frear())
// console.log(carro.velocidade)
// console.log(carro.frear())
// console.log(carro.velocidade)
// console.log(carro.frear())

// console.log(carro.desligar())
// console.log(carro.desligar())

// console.log(carro.acelerar())

// console.log(carro.frear())
class Animal {
  constructor(sonido) {
    this.sonido = sonido
  }
  getSonido() {
    return `${this.sonido}`
  }
}

class Perro extends Animal {
  constructor(nombre) {
    super("Guau Guau")
    this.nombre = nombre
  }
  getSonido() {
    return `El ${this.nombre} hace ${this.sonido}`
  }
}

class Gato extends Animal {
  constructor(nombre) {
    super("Miau Miau")
    this.nombre = nombre
  }
  getSonido() {
    return `El ${this.nombre} hace ${this.sonido}`
  }
}

class Oveja extends Animal {
  constructor(nombre) {
    super("Beee")
    this.nombre = nombre
  }
  getSonido() {
    return `La ${this.nombre} hace ${this.sonido}`
  }
}

const SonidoP = new Perro('Wally')
const Perro2= new Perro('Firulais')
const SonidoG = new Gato( 'Garfield')
const SonidoO = new Oveja('Dolly')

console.log(SonidoP.getSonido())
console.log(Perro2.getSonido())
console.log(SonidoG.getSonido())
console.log(SonidoO.getSonido())

class Largometraje {
  constructor(titulo, duracion, genero){
    this.titulo = titulo
    this.duracion = duracion
    this.genero = genero
  }
  getDescripcion () {
    return `titulo:${this.titulo} 
    duracion: (${this.duracion} min)
    genero:${this.genero}`
  }
}

class Pelicula extends Largometraje {
  constructor(titulo, duracion, genero, clasificacion){
    super(titulo,duracion,genero)
    this.clasificacion = clasificacion
  }
  getDescripcion () {
    return `${super.getDescripcion()}
    Clasificacion: Esta es apta para mayores de ${this.clasificacion} años`
  }
}

class Documental extends Largometraje {
  constructor(titulo, duracion, genero, narrador){
    super(titulo,duracion,genero)
    this.narrador = narrador
  }
  getDescripcion(){
    return `${super.getDescripcion()} 
    Narrado por: ${this.narrador}`
  }
}
const Largometraje1 = new Largometraje("Shrek", 180, "Fantasia")
const Pelicula1 = new Pelicula("El señor de los anillos", 180, "Fantasia", "B")
const Documental1 = new Documental("El origen del universo", 120, "Ciencia", "Neil deGrasse Tyson")
// console.log(Largometraje1.getDescripcion())
// console.log(Pelicula1.getDescripcion())
// console.log(Documental1.getDescripcion())

class Cine {
  constructor(nombre){
    this.nombre = nombre
  }
  reproducir(Largometraje){
    return `Se esta reproduciendo en el Cine: ${this.nombre}
     ${Largometraje.getDescripcion()}`
  }
}

const cinepolis = new Cine("Cinepolis")

console.log(cinepolis.reproducir(Documental1))




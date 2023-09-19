//Definimos la clase
class Persona{
    constructor(nombre = "Pedro", edad = 11){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(nombre){
         return `Hola ${nombre}, soy ${this.nombre} y tengo ${this.edad}`
    }
}

//Instanciamos la clase, creamos el objeto
let persona1 = new Persona("Juan", 19)
let persona2 = new Persona("Susana", 23)
let persona3 = new Persona("Manuel", 30)
//Se asingan por defecto los valores que asigné en el constructor
let persona4 = new Persona()

console.log(persona1.saludar("Mundo"))
console.log(persona2.saludar("Mundo"))
console.log(persona4.saludar("Mundo"))

console.log(persona3.nombre)
console.log(persona3.edad)

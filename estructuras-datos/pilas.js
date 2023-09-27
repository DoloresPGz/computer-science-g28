let arregloLineal = [2,5,-2,8,10]

// for(let i = 0; i < arregloLineal.length; i++){
//   console.log(arregloLineal[i])
// }

let arregloMultidimensional = [
    [2,5,-2,8,10],
    [3,4,5,6,7],
    [1,2,3,4,5]
]

// console.log(arregloLineal[2])
// console.log(arregloMultidimensional[1][2])

let arregloTridimensional = [
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  [
    [10,11,12],
    [13,14,15],
    [16,17,18]
  ]
]
// console.log(arregloTridimensional[1][2][0])

// Creacion de una pila
class Pila {
  constructor(){
    this.pila = []
  }

  push(elemento){
    this.pila.push(elemento)
  }

  pop(){
    return this.pila.pop()
  }

  peek(){
    return this.pila[this.pila.length - 1]
  }

  size(){
    return this.pila.length
  }

  print(){
    console.log(this.pila)
  }
}

//Utilizar pila
let pila1 = new Pila()
//agregar datos
// pila1.push(1)
// pila1.push(2)
// pila1.push(3)
//imprimir datos
// pila1.print()
//eliminar datos
// let datoEliminado = pila1.pop()
// pila1.print()

// console.log(`El dato eliminado es: ${datoEliminado}`)

class PilaObjeto {
  constructor(){
    this.data = {}
    this.contador = 0
  }

  push(elemento){
    this.data[this.contador] = elemento
    this.contador++
  }

  pop(){
    let elementoEliminado = this.data[this.contador - 1]
    delete this.data[this.contador - 1]
    this.contador--
    return elementoEliminado
  }

  peek() {
    return this.data[this.contador - 1]
  }

  size() {
    return this.contador
  }

  print(){
    console.log(this.data)
  }
}
let pila2 = new PilaObjeto()
//agregar datos
pila2.push(4)
pila2.push(5)
pila2.push("Hola")

//imprimir datos
pila2.print()
//eliminar datos
let datoEliminado2 = pila2.pop()

pila2.print()
// console.log(`El dato eliminado es: ${datoEliminado2}`)

// console.log(pila2.peek())
console.log(pila2)




// Cola
// FIFO (First In First Out)

class Cola {
  constructor(){
    this.data = []
  }
  // Metodos
  //encolar: agregar un elemento al final de la cola
  enqueue(elemento){
    this.data.push(elemento)
  }
  //desencolar: eliminar el primer elemento de la cola
  dequeue(){
    return this.data.shift()
  }
  //peek: obtener el primer elemento de la cola, sin quitarlo de la lista
  peek(){
    if(this.isEmpty()){
      return "La cola esta vacia"
    } 
    return this.data[0]
  }
  //size: obtener el numero de elementos de la cola
  size(){
    return this.data.length
  }
  //print: imprimir los elementos de la cola
  print(){
    console.log(this.data)
  }
  // isEmpty: saber si la cola esta vacia
  isEmpty(){
    if(this.data.length === 0){
      return true
    }else{
      return false
    }
  }
  //back: obtener el ultimo elemento de la cola
  back(){
    return this.data[this.data.length - 1]
  }
  //clear: limpiar la cola
  clear(){
    this.data = []
  }
}

// Implementar una cola 
let cola1 = new Cola()

// Agregar elementos
cola1.enqueue(1)
cola1.enqueue("Hola")
cola1.enqueue(true)

// Imprimir elementos
cola1.print()
//Eliminar elementos
let elementoEliminado = cola1.dequeue()
cola1.print()
console.log(`El elemento eliminado es: ${elementoEliminado}`)



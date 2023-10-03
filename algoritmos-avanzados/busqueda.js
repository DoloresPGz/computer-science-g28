// Busqueda Lineal
// Complejidad: O(n)
// Descripcion: Busca un elemento en un arreglo de enteros
//              y devuelve su posicion
console.time('busquedaLineal')
function busquedaLineal(arreglo, elemento){
  // Recorrer el arreglo
  for(let i = 0; i < arreglo.length; i++){
    // Si el elemento del arreglo es igual al elemento buscado
    if(arreglo[i] === elemento){
      // Devolver el indice
      return i
    }
  }
  // Si no se encontro el elemento
  return "no se encontro" // No se encontro el elemento
}
console.timeEnd('busquedaLineal')

// Busqueda Binaria
// Complejidad: O(log(n))
// Descripcion: Busca un elemento en un arreglo de enteros
//              y devuelve su posicion
console.time('busquedaBinaria')
function busquedaBinaria(arreglo, elemento){
  // Definir el inicio y el fin del arreglo
  let inicio = 0
  let fin = arreglo.length -1
  // Mientras el inicio sea menor o igual al fin
  while(inicio <= fin){
    // Definir el punto medio
    let medio = Math.floor((inicio + fin) / 2)
    // Si el elemento del punto medio es igual al elemento buscado
    if(arreglo[medio] === elemento){
      // Devolver el punto medio
      return  medio
      // Si el elemento del punto medio es menor al elemento buscado
    } else if(arreglo[medio] < elemento){
      // Definir el inicio como el punto medio + 1
      inicio = medio + 1
    } else { 
      // Definir el fin como el punto medio - 1
      fin = medio - 1
    }
  }
  // Si no se encontro el elemento
  return "No se encontro" // No se encontro el elemento\
}
console.timeEnd('busquedaBinaria')

let arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(busquedaLineal(arreglo, 9))
console.log(busquedaBinaria(arreglo, 9))
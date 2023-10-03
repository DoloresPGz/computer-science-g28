// Busqueda Lineal
// Complejidad: O(n)
// Descripcion: Busca un elemento en un arreglo de enteros
//              y devuelve su posicion
console.time('busquedaLineal')
function busquedaLineal(arreglo, elemento){
  
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] === elemento){
      return i
    }
  }
  return "no se encontro" // No se encontro el elemento
}
console.timeEnd('busquedaLineal')

// Busqueda Binaria
// Complejidad: O(log(n))
// Descripcion: Busca un elemento en un arreglo de enteros
//              y devuelve su posicion
console.time('busquedaBinaria')
function busquedaBinaria(arreglo, elemento){

  let inicio = 0
  let fin = arreglo.length -1

  while(inicio <= fin){
    let medio = Math.floor((inicio + fin) / 2)

    if(arreglo[medio] === elemento){
      return  medio
    } else if(arreglo[medio] < elemento){
      inicio = medio + 1
    } else {
      fin = medio - 1
    }
  }
  return "No se encontro" // No se encontro el elemento

}
console.timeEnd('busquedaBinaria')

let arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(busquedaLineal(arreglo, 9))
console.log(busquedaBinaria(arreglo, 9))
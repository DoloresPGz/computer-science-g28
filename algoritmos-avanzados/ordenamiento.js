//Algoritmo de burbuja
//Complejidad: O(n^2)
//Descripcion: Ordena un arreglo de enteros
//             de menor a mayor

function burbuja(arr) {
 // Obtenemos la longitud del array.
 let n = arr.length;
 // Bucle externo: recorre cada elemento del array.
 for (let i = 0; i < n-1; i++) {
     // Bucle interno: recorre los elementos restantes.
     for (let j = 0; j < n-i-1; j++) {
         // Si el elemento actual es mayor que el siguiente...
         if (arr[j] > arr[j+1]) {
             // ... los intercambiamos usando una variable temporal.
             let temp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = temp;
         }
     }
 }
 // Devolvemos el array ordenado.
 return arr;
}

// let arregloDesordenado = [5, 4, 3, 2, 1, 7, 6]
// console.log("Arreglo desordenado: ", arregloDesordenado)
// const arregloOrdenado = burbuja(arregloDesordenado)
// console.log("Arreglo ordenado: ", arregloOrdenado)


//Algoritmo de insercion
//Complejidad: O(n^2)
//Descripcion: Ordena un arreglo de enteros
//             de menor a mayor

function insercion(arr) {
  //obtenemos la longitud del array
  let n = arr.length;

  //bucle externo: recorre cada elemento del array, empezar por el segundo elemento
  for(let i = 1; i < n; i++){
    //guardamos el valor del elemento actual
    let valorActual = arr[i];
    //inicializamos el indice para el bucle interno
    let j = i - 1;
    // bucle interno: recorre los elementos anteriores al elemento actual
    //mientras j no sea negativo y elemento anterior sea mayor que el elemento actual
    while(j >= 0 && arr[j] > valorActual){
      //movemos el elemento anterior al siguiente
      arr[j+1] = arr[j];
      //decrementamos el indice
      j--;
    }
    //insertamos el elemento actual en la posicion correcta
    arr[j+1] = valorActual;
  }
  //devolvemos el array ordenado
  return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Arreglo desordenado: ", unsortedArray)

const sortedArray = insercion(unsortedArray);
console.log("Arreglo ordenado: ", sortedArray);

let alumno = {
    nombre: 'Eduardo',
    edad: 27,
    ciudad: 'CDMX',
    materia: 'matematicas'
}

const {nombre, edad, ...infoAdicional} = alumno
/*El operador rest ...infoAdicional recoge las propiedades restantes del objeto 
alumno después de haber desestructurado las propiedades de
nombre y edad
*/
console.log(nombre)
console.log(edad)
console.log(infoAdicional)

let alumno2 = {...alumno, nombre: 'Lucia'}

const {nombre : nombre2, edad : edad2, ...infoAdicional2} = alumno2

console.log(nombre2)
console.log(edad2)

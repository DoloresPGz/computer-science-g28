const animal = {
  name: 'Animal',
  haceSonido: function () {
    console.log('algun sonido')
  }
}

const perro = Object.create(animal)
perro.name = 'Perro'
// perro.haceSonido = function () {
//   console.log('guau guau')
// }

const gato = Object.create(animal)
gato.name = 'Gato'
gato.haceSonido = function () {
  console.log('miau miau')
}



perro.haceSonido()
gato.haceSonido()
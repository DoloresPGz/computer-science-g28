function master(programa, ...senseis) {
    console.log("Bienvenido a " + programa)
    console.log(senseis)
}

master("Master en Coding", "Mali","Maui","Gera","Francisco")


function sum(x, y, z, a) {
    return x + y + z + a
}

const numbers = [1, 2, 3, 4]

console.log(sum(...numbers))

const numbers2 = [...numbers]

numbers.push(5)

console.log(numbers2)

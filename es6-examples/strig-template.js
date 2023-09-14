function master(programa, ...senseis) {
    console.log(`Bienvenido a ${programa}`)
    console.log(`Sensieis ${senseis[0]} ${senseis[1]} ${senseis[2]}`)
}


master("Master en Coding", "Mali", "Maui", "Gera")

/*
Con las comillas simples y comillas dobles no puedo realizar saltos de línea en el texto
let comillaSimple = "FDASFAFAFDS

"*/


let strigTemplate = `Con string template
puedo hacer saltos de línea en el texto`

console.log(strigTemplate)
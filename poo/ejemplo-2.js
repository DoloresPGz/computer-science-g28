class Contador{
    constructor(valor = 0){
        //Utilizamos '_' para definir los atributos que usaremos como privados, es decir, que
        //sólo manipularemos por medio de métodos dentro de la clase
        this._valor = valor;
    }

    incrementar(){
        this._valor++
    }

    obtenerValor(){
        return this._valor
    }
}

let contador1 = new Contador()
contador1.incrementar()
console.log(contador1.obtenerValor())

let contador2 = new Contador()
console.log(contador2.obtenerValor())

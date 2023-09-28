class Node{
    constructor(data){
        this.data = data
        this.next = null //puntero
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head
    }

    //Inserción de un elemento
    insert(data){
        //Creo mi nuevo nodo que se va a enlazar a mi estructura
        let node = new Node(data)

        //Primer caso: Mi lista se encuentra vacía (head -> null)
        if(this.head == null){
            this.head = node
        }else{
        //Segundo caso: Tengo por lo menos un nodo en la lista
            let current = this.head
            while(current.next !== null){
                let lo_que_era_current = current
                current = lo_que_era_current.next
            }
            current.next = node
        }
    }

    //Borrado de un elemento
    delete(data){
        let current = this.head
        let prev = this.head

        if(this.head !== null){
            //Primer caso: El elemento que quiero borrar está en la cabeza
            if(this.head.data == data){
                this.head = this.head.next
            }else{
            //Segundo caso: El elemento que quiero borrar no se encuentra en la cabeza
                while(current.next !== null && current.data !== data ){
                    prev = current //guardamos el elemento anterior
                    current = current.next //nos movemos al siguiente nodo de la lista
                }
                //Cuando sale del ciclo, encontramos el elmento que queremos elimirar
                if(current.next !== null)
                    prev.next = current.next
                
            }
        }
    }

    //Recorrido de la lista
    print(){
        let res = ""
        let current = this.head
        while(true){
            if(current == null){
                break
            }
            res += `${current.data} -> `
            current = current.next
        }
        return res += "null"
    }

    //Búsqueda de un elemento
    search(data){
        let current = this.head

        while(!(current == null || current.data == data)){
            current = current.next
        }
        return current
    }
}

let ll = new LinkedList()

ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
ll.insert(5)

console.log(ll.print())
ll.delete(2)
console.log(ll.print())

//prueba de borrar un elemento que no existe
ll.delete(7)

console.log(ll.print())

console.log(ll.search(4))
console.log(ll.search(7))

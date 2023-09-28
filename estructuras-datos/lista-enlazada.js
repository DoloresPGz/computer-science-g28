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
                prev.next = current.next
            }
        }
    }

    //Recorrido de la lista

    //Búsqueda de un elemento
}

let ll = new LinkedList()

ll.insert(1)
ll.insert(2)
ll.insert(3)

console.log(ll)
ll.delete(2)
console.log(ll)

ll.delete(5)
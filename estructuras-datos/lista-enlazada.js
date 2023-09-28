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

    //Recorrido de la lista

    //Búsqueda de un elemento
}

let ll = new LinkedList()

ll.insert(1)
ll.insert(2)
ll.insert(3)

console.log(ll)
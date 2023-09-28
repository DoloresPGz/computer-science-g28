class Node {
    constructor(data) {
        this.data = data
        this.left = null // this.next
        this.right = null // this.next2
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root
    }
    
    // Agregar un elemento al árbol
    insert(data) {
        let node = new Node(data)
        
        //Primer caso: el árbol se encuentra vacío
        if(this.root == null) {
            this.root = node
        } else {
        //Segundo caso: el árbol tiene por lo menos un elemento
            let current = this.root
            
            // Explorar el árbol
            while(true) {
            
                if(current.right != null && current.data < node.data) {
                    current = current.right
                } else if (current.left != null && current.data > node.data) {
                    current = current.left
                } else {
                    break
                }
            }


            // Llegamos a nuestro destino y asignamos
            if(current.right == null && current.data < node.data) {
                current.right = node
            } else if (current.left == null && current.data > node.data) {
                current.left = node
            }
            
        }
    } 
    
    search(data) {
        //Primer caso: la información que buscamos se encuentra en la raíz
        if(this.root.data == data) {
            return this.root
        } else {
        //Segundo caso: la información se encuentra fuera de la raíz
            let current = this.root

            while(true) {
                if(current.right != null && current.data < data) {
                    current = current.right
                } else if (current.left != null && current.data > data) {
                    current = current.left
                } else {
                    break
                }
            }
        
            if(current.data == data)
                return current
            else
                return null
        }
    }

    preorder(node = this.root, res = []) {
        if (node) {
            res.push(node.data);
            this.preorder(node.left, res);
            this.preorder(node.right, res);
        }
        return res;
    }

    // Recorrido postorden (postorder traversal) del árbol binario.
    postorder(node = this.root, res = []) {
        if (node) {
            this.postorder(node.left, res);
            this.postorder(node.right, res);
            res.push(node.data);
        }
        return res;
    }
}

let binaryTree = new BinaryTree()

binaryTree.insert(26)
binaryTree.insert(55)
binaryTree.insert(14)
binaryTree.insert(19)
binaryTree.insert(6)
binaryTree.insert(84)
binaryTree.insert(54)
binaryTree.insert(99)
binaryTree.insert(87)
binaryTree.insert(47)
binaryTree.insert(53)
binaryTree.insert(30)
binaryTree.insert(29)
binaryTree.insert(85)
binaryTree.insert(58)

console.log(binaryTree.search(54))

console.log(binaryTree.preorder())
console.log(binaryTree.postorder())
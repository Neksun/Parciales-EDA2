//2.	Modificar el algoritmo de árboles binarios, implementar una función para calcular la altura de un árbol.
// https://www.youtube.com/watch?v=rR3YJkeZhbE VIDEO PARA ENTENDER COMO SE CALCULA LA ALTURA DE UN ARBOL BINARIO
//Karol payares 2221343
//Codigo de la presentacion de arbol binario
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    isLeaf() {
      if (this.left === null && this.right === null) {
        return true;
      } else {
        return false;
      }
    }
  }

  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value, null, null);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        let current = this.root;
        let isFound = false;
  
        while (!isFound) {
          if (current.value === value) {
            isFound = true;
            return null;
          }
  
          if (current.value > value) {
            if (!current.left) {
              current.left = newNode;
              isFound = true;
            } else {
              current = current.left;
            }
          } else {
            if (!current.right) {
              current.right = newNode;
              isFound = true;
            } else {
              current = current.right;
            }
          }
        }
      }
    }

    preOrder(node = this.root) {
        if (!node) {
          return;
        }
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
      
      postOrder(node = this.root) {
        if (!node) {
          return;
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
      }
      
      inOrder(node = this.root) {
        if (!node) {
          return;
        }
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
      }
//nueva funcion
      height(node = this.root) {
        if (node === null) {
          return 0;
        } else {
          const leftHeight = this.height(node.left);
          const rightHeight = this.height(node.right);
    
          return Math.max(leftHeight, rightHeight) + 1;
        }
      }

    
  }

  const tree = new BinaryTree();
  tree.insert(20);
  tree.insert(4);
  tree.insert(12);
  tree.insert(1);
  tree.insert(2);
  
  console.log("Altura del árbol:", tree.height());
  console.log("////////////")
  console.log("Recorrido en Pre-Order:");
tree.preOrder(); // Llama al método preOrder para imprimir el recorrido
console.log("Recorrido en In-Order:");
tree.inOrder(); // Llama al método inOrder para imprimir el recorrido
console.log("Recorrido en Post-Order:");
tree.postOrder(); // Llama al método postOrder para imprimir el recorrido
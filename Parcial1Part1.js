//1.	Implementar una función que tenga como parámetros dos listas enlazadas de números ordenados
// de mayor a menor y que retorne una nueva lista con la unión de ambas y sus elementos ordenados de menor a mayor.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
//Karol payares 2221343

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  toArray() {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }


  static fromArray(array) {
    const list = new LinkedList();
    array.reverse().forEach(value => list.insert(value)); // Inserta en orden inverso para mantener el orden en la lista
    return list;
  }

  //imprimir la lista
  print() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.value + " -> ";
      current = current.next;
    }
    output += "null";
    console.log(output);
  }
}

// unir y ordenar
function mergeAndSortLists(list1, list2) {
  const mergedArray = list1.toArray().concat(list2.toArray());
  const sortedArray = mergedArray.sort((a, b) => a - b);
  return LinkedList.fromArray(sortedArray);
}

  // Ejemplo de uso
  const list1 = new LinkedList();
  list1.insert(2);
  list1.insert(8);
  list1.insert(10);
  list1.insert(16);
  
  const list2 = new LinkedList();
  list2.insert(1);
  list2.insert(3);
  list2.insert(6);
  list2.insert(9);

// Imprimir las listas originales
console.log("Lista 1 original (de mayor a menor):");
list1.print();
console.log("Lista 2 original (de mayor a menor):");
list2.print();

// Fusionar y ordenar las listas
const mergedList = mergeAndSortLists(list1, list2);
console.log("Lista unida y ordenada (de menor a mayor):");
mergedList.print();

  

  
  
  

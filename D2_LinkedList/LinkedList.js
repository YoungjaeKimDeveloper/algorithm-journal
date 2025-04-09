// {
//     head:{
//         value:11,
//         next:{
//             value:3,
//             next:{
//                 value:3,
//                 next:{
//                     value:23,
//                     next:{
//                         value:7,
//                         next:{
//                             value:4,
//                             next:null
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// Node Constructor  - Node Class
class Node {
  constructor(value) {
    this.value = value; // node value
    this.next = null; // initially, next is null because the node doesn't point to anything.
  }
}
// LinkedList: a fundamental data structure where each node points to the next
// when there is only one node, pointer points[refer] to head and tail.
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode; // the first node in the list
    this.tail = this.head; //the last node in the list
    this.length = 1; // the number of node
  }
  push(value) {
    const newNode = new Node(value);
    // when there is only one node.
    if (!this.head) {
      this, (head = newNode);
      this.tail = newNode;
    } else {
      // the next node is new node
      this.tail.next = newNode;
      // tail is also new Node
      this.tail = newNode;
    }
    this.length++;
    // meaning of "this" return entire of LinkedList
    return this;
  }
}

// Value = The data node has.
// next = next node
// next = null. It means it is the last node

// Create one one = Node Head
const head = new Node(11);
// Pont the next node tail = null
head.next = new Node(3);
// Pont the next node tail = null
head.next.next = new Node(23);
// Pont the next node tail = null
head.next.next.next = new Node(7);
// Pont the next node tail = null
head.next.next.next.next = new Node(4);

// Linked List - always when I created new instance: we need a "new" keywrod
// "New" keyword calls a constructor
let myLinkedList = new LinkedList(4);

// Value method

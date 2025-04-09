class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    // Don't forget to se the length!!
    this.length = 1;
  }
  enqueue(value) {
    const newNode = new Node(value);
    // when it is the fist Queue, first and last are  always pints first queue
    // it means it is null
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    // increase the length
    this.length++;
    // return the whole queue
    return this;
  }
}
// Enqueue -> add the elements to the Queue

// LinkedList -> head && tail
// Queue -> first && last

let myQueue = new Queue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
console.log(myQueue)

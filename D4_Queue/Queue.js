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
  dequeue() {
    // Always think about error case
    if (this.length === 0) return undefined;
    // always create the temp
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      // move the first queue
      this.first = this.first.next;
      temp.next = null;
    }
    // decrease the length
    this.length--;
    return temp;
  }
}
// Enqueue -> add the elements to the Queue

// LinkedList -> head && tail
// Queue -> first && last

let myQueue = new Queue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
console.log(myQueue);

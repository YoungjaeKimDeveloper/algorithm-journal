class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// 기본의 Node를 바탕으로 Stack Data Structure를 만들어줌
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    // return entire of the stack
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    // it points the top element of stack
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

/*  
    Unshift -> Add new elements at the front of the array
    const array1 = [1, 2, 3];

    console.log(array1.unshift(4, 5));
    Expected output: 5

    console.log(array1);
    Expected output: Array [4, 5, 1, 2, 3]


*/

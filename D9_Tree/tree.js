// Node can always change the from depends on problem.
class Node {
  constructor(value) {
    // 현재의 value
    this.value = value;
    // Left의 value
    this.left = null;
    // right
    this.right = null;
  }
}

// Binary Search Tree
class BST {
  constructor() {
    // it becoms the root node
    this.root = null; // it will be the first root node of Binary Search Tree
  }
}

// Create new Tree
let myTree = new BST();
console.log(myTree);

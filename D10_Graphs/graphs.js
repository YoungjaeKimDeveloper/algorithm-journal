class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertext(vertext) {
    if (!this.adjacencyList[vertext]) {
      this.adjacencyList[vertext] = [];
      return value;
    }
    return false;
  }
  //add the new Edge
  addEdge(vertext1, vertext2) {
    // check the validation
    if ((this.adjacencyList[vertext1] && this, this.adjacencyList[vertext2])) {
      this.adjacencyList[vertext1].push(vertext2);
      this.adjacencyList[vertext2].push(vertext1);
      return true;
    }
    return false;
  }
  // remove Edge - Remove the Edge
  removeEdge(vertext1, vertext2) {
    if (this.adjacencyList[vertext1] && this.adjacencyList[vertext2]) {
      this.adjacencyList[vertext1] = this.adjacencyList[vertext1].filter(
        (v) => v !== vertext2
      );
      this.adjacencyList[vertext2] = this.adjacencyList[vertext2].filter(
        (v) => v !== vertext1
      );
      return true;
    }
    return true;
  }
  removeVertext(vertext) {
    // if there is no vertex
    if (!this.adjacencyList[vertext]) return undefined;
    while (this.adjacencyList[vertext].length) {
      let temp = this.adjacencyList[vertext].pop();
      this.removeEdge(vertext, temp);
    }
    delete this.adjacencyList[vertext];
    return this;
  }
}

// Create new Graph
let myGraph = new Graph();
console.log(myGraph);

// Breadth First Search 
// BFS() {
//     let currentNode = this.root
//     let queue = []
//     let results = []
//     queue.push(currentNode);
    
//     while(queue.length){
//         currentNode = queue.shift()
//         results.push(currentNode.value)
//         if(currentNode.left) queue.push(currentNode.left)
//         if(currentNode.right) queue.push(currentNode.right)
//     }
// };

// BFSPreOrder(){
//     let results = []
//     function traverse(currentNode){
//         results.push(currentNode.value)
//         if(currentNode.left) traverse(currentNode.left)
//         if(currentNode.right)traverse(currentNode.right)
//     }
//     traverse(this.root)
// }

// DFSPostOrder(){
//     let result = []
//     function traverse(currentNode){
//         if(currentNode.left)traverse(currentNode.left)
//         if(currentNode.right) traverse(currentNode.right)
//         result.push(currentNode.value)
//     }
//     traverse(this,root)
// }
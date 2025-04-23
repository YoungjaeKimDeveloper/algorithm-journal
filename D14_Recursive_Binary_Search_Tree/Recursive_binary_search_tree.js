// BST - Recursive Search
function rContains(value, node = this.root) {
  if (!node) return false;
  if (node.value === value) return true;
  return value < node.value
    ? rContains(value, node.left)
    : rContains(value, node.right);
}

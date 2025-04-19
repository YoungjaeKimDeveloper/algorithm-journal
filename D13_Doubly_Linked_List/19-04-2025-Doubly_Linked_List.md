# 19-04-2025

# Topic: Doubly Linked List

## What is a Doubly Linked List?

- A Doubly Linked List is a type of linked list where each node contains three parts: a value, a pointer to the next node, and a pointer to the previous node.

## What is it for?

- It allows traversal in both directions (forward and backward), and enables efficient insertion or deletion from both ends or the middle in O(1) time.

## When do we use it?

- LRU Cache
- Undo/Redo systems (like in text editors)
- Browser history navigation (Back/Forward)
- In low-level system implementations like schedulers or memory managers

## How I understand it

- A Doubly Linked List is like a spider with three legs: one on the current node, one pointing forward, and one pointing backward.

### Why?

- It allows a programmer to access the current element, move forward to the next, or step back to the previous — all in constant time.  
  That’s why it’s the perfect structure when you need to traverse both directions efficiently.

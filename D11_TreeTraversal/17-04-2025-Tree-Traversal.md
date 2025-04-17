# 17-04-2025

What is the tree traversal?
-> process of visiting all the nodes in a tree - either deeply(down one path) or broadly (level by level)

# Tree Traversal - Two main Category

- BFS - Breadth First Search

  - visit nodes level by level, left to right
  - uses a Queue(FIFO)
  - it is used to find the shortest path
  - it is also used to process level by level is important
    - In Real world
      - GPS Navigation (shortest route)
      - Facebook friend suggestion (mutual friends)
      - Level-order printing in a tree structure

- DFS - Depth First Search
  - it uses a Stack or recursion
  - Good for full path exploration
  - uses less memory than BFS
  - Types
    - Preorder: Root -> Left -> Right
    - Inorder : Left -> Root -> Right
    - Postorder : Left -> Right -> Root
      - In Real world
        - Navigation folder/file structure
        - Solving a maze with backtracking

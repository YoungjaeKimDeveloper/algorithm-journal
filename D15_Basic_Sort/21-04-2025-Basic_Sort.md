# 21-04-2025

# Topic: Basic Sort

- # Bubble Sort

  - Continuously compares adjacent values and swaps them if needed.
  - Mainly used for understanding basic sorting concepts. (Realistically, not used in practice.)
  - Pros: Very easy to implement.
  - Cons: Very slow — requires O(n²) comparisons and O(n²) swaps.

- # Selection Sort

  - Finds the minimum value in the unsorted part and swaps it with the front element.
  - Useful in environments with limited memory.
  - Pros: Fewest swaps.
  - Cons: Always O(n²) comparisons. Not a stable sort.

- # Insertion Sort
  - Maintains a sorted portion on the left and inserts new elements into the correct position.
  - Very effective for nearly sorted lists.
  - Pros: Best case is O(n). Practical for small or nearly sorted arrays.
  - Cons: Worst case is O(n²), so not efficient for large datasets.

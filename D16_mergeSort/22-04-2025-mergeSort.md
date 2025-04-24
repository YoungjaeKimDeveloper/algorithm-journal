# 22-04-2025

# Topic - Merge Sort

1. Breaks arrays in half

   - Divide: Recursively splits the array into halves

2. Base case: when array.length is 1

   - Stops splitting when array.length === 1

3. Uses merge() to put arrays together
   - Conquer: Merges sorted halves using merge() function

# 24-04-2025

<!-- Space Complexity  -->

Time Complexity

- O(n log n)
  - log n for spliting
  - n for merging at each Level

Space Complexity

- O(n)
  - Requires extra space to merge arrays

# Conclusion

- Merge Sort is stable,predictable,and useful for large or linked data - especially when parallelization is possible.

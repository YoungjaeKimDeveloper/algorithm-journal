/*
    A pointer is an essential concept in data structures.
*/

// Primitive Types - pass-by-value
// When assigning a primitive value, it copies the actual value.
let num1 = 5;
let num2 = num1; // num2 gets a copy of num1's value.

/*
    Pointers - When assigning a reference type (e.g., array or object) to another variable,
    it doesn't create a copy but rather a reference to the same memory location.
*/

let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 points to the same memory address as arr1.

/*
    Both arr1 and arr2 refer to the same memory location.
    Therefore, when arr1 is modified, the changes will be reflected in arr2 as well.
*/

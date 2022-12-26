// Reverse Array
// Reverse an array of integers.

// My solution using array.push O(n)
function reverseArray(a) {
  // Write your code here
  var reversedArray = [];

  for (let i = 0; i < a.length; i++) {
    reversedArray.push(a[a.length - 1 - i]);
  }
  return reversedArray;
}

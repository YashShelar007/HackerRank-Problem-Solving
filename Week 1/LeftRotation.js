// Left Rotation
// A left rotation operation on an array of size shifts each of the array's elements
// 1 unit to the left. Given an integer, d, rotate the array that many steps left and return the result.

// My initial solution with nested for loops O(n^2)
function rotateLeft(d, arr) {
  // Write your code here
  var shiftedChar = "";
  for (let i = 0; i < d; i++) {
    shiftedChar = arr[0];
    for (let j = 0; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = shiftedChar;
  }
  return arr;
}

// My improved solution with single for loop O(n)
function rotateLeft(d, arr) {
  // Write your code here
  var resultArray = [];

  for (let i = d; i < arr.length; i++) {
    resultArray.push(arr[i]);
  }

  for (let i = 0; i < d; i++) {
    resultArray.push(arr[i]);
  }
  return resultArray;
}

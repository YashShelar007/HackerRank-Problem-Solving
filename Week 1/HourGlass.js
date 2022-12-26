// Hour Glass
// An hourglass sum is the sum of an hourglass' values.
// Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 x 6.

// My solution using nested forloops O(n^2)
function hourglassSum(arr) {
  // Write your code here
  var sum = 0;
  var max = 0;
  var counter = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        +arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      if (counter === 0) {
        max = sum;
        counter++;
      } else if (max < sum) {
        max = sum;
      }
    }
  }
  return max;
}

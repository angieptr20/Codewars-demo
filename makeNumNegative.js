/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/

function makeNegative(num) {
    if (num > 0) {
      return num * -1; // Convert positive numbers to negative
    }
    return num; // If num is already negative or zero, return it as is
  }
  
  // Test cases
  console.log(makeNegative(5));  // Output: -5
  console.log(makeNegative(-3)); // Output: -3
  console.log(makeNegative(0));  // Output: 0
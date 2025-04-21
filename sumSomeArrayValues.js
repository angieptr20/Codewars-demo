//sort((a,b) => a-b)[0]

function sumArray(array) {
    if (!array || array.length <= 2) return 0;
  
    // Sort the array from smallest to largest
    let sorted = array.sort((a, b) => a - b);
  
    // Slice off the first and last (lowest and highest)
    let trimmed = sorted.slice(1, -1);
  
    // Sum the remaining numbers
    let sum = 0;
    for (let i = 0; i < trimmed.length; i++) {
      sum += trimmed[i];
    }
  
    return sum;
}

console.log(sumArray([6, 2, 1, 8, 10])); // 16
console.log(sumArray([1, 1, 11, 2, 3])); // 6


//BETTER SOLUTION USING REDUCE INSTEAD OF A FOR LOOP
function sumArray(array) {
    if (!array || array.length <= 2) return 0;
  
    // Sort the array from smallest to largest
    let sorted = array.sort((a, b) => a - b);
  
    // Slice off the first and last (lowest and highest)
    let trimmed = sorted.slice(1, -1);
  
    // Sum the remaining numbers using reduce
    let sum = trimmed.reduce((acc, num) => acc + num, 0);
  
    return sum;
  }
  

/*  
Here's what each part means:
!array
This checks if array is falsy.

If array is null, undefined, or something like that, !array will be true.

So this protects your code from crashing if no array was passed in.

array.length <= 2
This checks if the array has 2 or fewer elements.

If there's only 1 or 2 items, you can't remove both the highest and lowest values and still have anything left to sum — so it just returns 0.

Why both checks?
Imagine someone passes in:

null → !array catches that

[] (empty array) → array.length <= 2 catches that

[3] or [3, 5] → still too short to remove min/max
*/


//OTHER SOLUTION
function sumArray(array) {
    // Handle edge cases: null, undefined, or not enough elements
    if (!array || array.length <= 2) return 0;
  
    // Initialize variables
    let min = Math.min(...array);
    let max = Math.max(...array);
    let sum = 0;
    let minRemoved = false;
    let maxRemoved = false;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === min && !minRemoved) {
        minRemoved = true; // Remove only one min
        continue;
      }
      if (array[i] === max && !maxRemoved) {
        maxRemoved = true; // Remove only one max
        continue;
      }
      sum += array[i];
    }
  
    return sum;
  }
  
/*
What is minRemoved and maxRemoved doing?
They're flags (boolean values) used to make sure only one instance of the smallest and largest numbers gets removed.

Here's the idea:

Imagine multiple elements in the array equal the min or max.

You only want to remove one min and one max, not all of them.

So:
if (array[i] === min && !minRemoved) {
  minRemoved = true;
  continue;
}
This says:

"If the current number is the minimum, and I haven't removed a min yet, skip this number, and mark it as removed."

Same logic for maxRemoved.

What does continue do?
The continue statement skips the rest of the loop for that iteration.

So if you hit a min or max that hasn't been removed yet, you:

Flag it as removed.

Skip adding it to the sum.

Summary:

-minRemoved and maxRemoved are used to only skip one occurrence of the smallest and largest values.

-continue tells the loop to skip over those values when found.

So we set minRemoved = true to mark it as removed, and continue to skip adding it to the sum.

Example:
Let’s say:

js
Copy
Edit
let array = [1, 1, 2, 3, 4];
And the min is 1. You only want to remove one of those 1s, not both.

Here’s what happens in the loop:

i	array[i]	minRemoved	Action	                            sum
0	1	        false	    it's min, minRemoved → true	        skip
1	1	        true	    already removed min → add to sum	1
2	2	        true	    not min or max → add to sum	        3
3	3	        true	    not min or max → add to sum	        6
4	4	        true	    not min or max → add to sum	        10

Final sum = 10
*/

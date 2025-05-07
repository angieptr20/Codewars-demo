/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
*/

function distinct(a) {
    let unique = [];
  
    for (let i = 0; i < a.length; i++) {
      if (!unique.includes(a[i])) {
        unique.push(a[i]);
      }
    }
  
    return unique;
  }

//USING FILTER AND INDEXOF()
function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
  }
  
//USING FILTER AND INCLUDES()  
function removeDuplicates(arr) {
    const unique = [];
    return arr.filter(item => {
      if (!unique.includes(item)) {
        unique.push(item);
        return true;
      }
      return false;
    });
}
 
//BEST SOLUTION

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers.filter((value, index) => {
  return numbers.indexOf(value) === index;
});

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

/*
How .indexOf() works inside .filter()
- Finding the First Occurrence:
- .indexOf(value) returns the first position where value appears in the array.
- Checking for a Duplicate:
- If the current index (index) matches the first occurrence index (indexOf(value)), it's the first time the element appears.
- If index > indexOf(value), that means this instance is a duplicate.
- Filtering Duplicates:
- .filter() keeps only the first occurrence and removes all duplicates


Step-by-Step Execution
| Element (value) | First Index (indexOf(value)) | Current Index (index) | Included in New Array? 
| 1               | 0                            | 0                     | ✅ Yes                 
| 2               | 1                            | 1                     | ✅ Yes                 
| 2               | 1                            | 2                     | ❌ No (Duplicate)
| 3               | 3                            | 3                     | ✅ Yes                 
| 4               | 4                            | 4                     | ✅ Yes                 
| 4               | 4                            | 5                     | ❌ No (Duplicate) 
| 5               | 6                            | 6                     | ✅ Yes 

This method ensures only unique elements are kept while filtering out repeats
*/
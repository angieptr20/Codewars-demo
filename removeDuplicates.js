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
  
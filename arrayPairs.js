/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str){
    let arr = []
    if (str.length % 2 !== 0) {
      str += '_'
    }
   for (let i = 0; i < str.length; i += 2) {
     const pair = str.slice(i, i + 2)
     arr.push(pair)
   }
   return arr
}

//Explanation of str.slice(i, i + 2)
//slice(start, end): This method extracts a portion of a string starting at start (inclusive) and stopping at end (exclusive).
//In this case, the loop starts at i = 0 and grabs the two characters from the indices i to i + 2. 
// For example, indeces between (0, 2), it includes 0 and 1, but not 2 because it ends there and is exclusive.


//OTHER WAY 
function solution(str) {
  let result = [];
  
  for (let i = 0; i < str.length; i += 2) {
    let pair = str.slice(i, i + 2); // Extract two characters
    if (pair.length === 1) { // If only one character exists
      pair = pair + "_"; // Add underscore
    }
    result.push(pair); // Push the pair into the result array
  }
  return result;
}


//BETTER SOLUTION
function solution(str) {
    let pairs = [];
    
    // Adjust the string length if it's odd by adding an underscore
    if (str.length % 2 !== 0) {
      str += '_';
    }
  
    // Loop through the string in steps of 2
    for (let i = 0; i < str.length; i += 2) {
      pairs.push(str[i] + str[i + 1]);
    }
  
    return pairs;
  }
  
  console.log(splitPairs("abc"));    // Output: ['ab', 'c_']
  console.log(splitPairs("abcdef")); // Output: ['ab', 'cd', 'ef']
  
  //MOST EFFICIENT SOLUTION
  function splitPairs(str) {
    return (str + "_").match(/.{2}/g) || [];
  }
  
/* 

Explanation
  str + "_":
  
  If the string has an odd length, appending an underscore (_) ensures that the length becomes even. For even-length strings, this has no impact since the regex will handle the pairs correctly.
  
  Regex Pattern /.{2}/g:
  
  .{2} matches any two consecutive characters in the string.
  
  The g flag ensures the regex operates globally, capturing all pairs of two characters in the string.
  
  .match():
  
  The match() method returns an array of all matched substrings (pairs of two characters in this case).
  
  If the string is empty, .match() will return null, so we use || [] to ensure that the function always returns an empty array in such cases.
*/
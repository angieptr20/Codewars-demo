// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so: 
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === 'needle') {
        return `found the needle at position ${i}`;
    }
  }
}

console.log(findNeedle(['apple', 'book', 'needle', 'hat'])); // Output: "found the needle at position 2"
  

//OTHER SOLUTION USING FOREACH --> You don’t have to include index unless you need it — but in this case, you do need it because you're using it to say where the "needle" is in the array:
function findNeedle(haystack) {
    let result = ''; // Variable to store the result; Declare variables outside blocks if you need to use them afterward.
  
    haystack.forEach((element, index) => {
      if (element === 'needle') {
        result = `found the needle at position ${index}`; //Declaring let result inside the if makes it inaccessible outside.
      }
    });
    return result;
  }
  
//BEST SOLUTION
function findNeedle(haystack) {
    const index = haystack.findIndex(item => item === 'needle');  //In arrow functions, if you don't use curly braces {}, the value of the expression is automatically returned. This is called an implicit return.
    return `found the needle at position ${index}`;
}
  
//The .findIndex() method always takes a function (called a callback) as its only argument. You don’t have to use all the parameters (index, array), just the ones you need.

/* array.findIndex((element, index, array) => {
  return true for the element you're looking for
});
*/

//YOU can also do it like this
function isNeedle(item) {
  return item === 'needle';
}

const index = haystack.findIndex(isNeedle);



function getWord(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'needle'){
            return `found needle in index ${i}`
        }
    }
}







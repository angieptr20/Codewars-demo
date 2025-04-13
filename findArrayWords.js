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
    let result = ''; // Variable to store the result
  
    haystack.forEach((element, index) => {
      if (element === 'needle') {
        result = `found the needle at position ${index}`;
      }
    });
  
    return result;
  }
  
//BEST SOLUTION
function findNeedle(haystack) {
    const index = haystack.findIndex(item => item === 'needle');
    return `found the needle at position ${index}`;
  }
  

function getWord(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'needle'){
            return `found needle in index ${i}`
        }
    }
}







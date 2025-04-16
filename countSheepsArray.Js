// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.


function countSheeps(arrayOfSheep) {
    let count = 0; // Start with count 0
    for (let i = 0; i < arrayOfSheep.length; i++) {  // Go through each sheep
        if (arrayOfSheep[i] === true) {  // If the sheep is present (true)
            count += 1;  // Increase the count by 1
        }
    }
    return count;  // Return the total count
}

const sheep = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
console.log(countSheeps(sheep));  // Output: 17


function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep === true).length;
  }
  
  //changed from sheep
  const sheeps = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
  console.log(countSheeps(sheep)); // Output: 17

// While includes alone isn't suited for counting values, filter works well here because it creates a new array containing only true values, and then .length gives the count.
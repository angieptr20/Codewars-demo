// Problem 1.)
// Given a string, return true if the string is a palindrome and false if it isnâ€™t. Include spaces and punctuation in deciding if the string is a palindrome.
// Ex.
// palindrome('racecar')  ===  true
// palindrome('laptop')  ===  false

//PREP
//Take in given string

//Return true if string is palindrome
//Return false if string is NOT palindrome

//Ex) 
//palidrome('racecar') === true
//palindrome('laptop')  ===  false

//.toLowerCase()
//.split()
//.join()
//.reverse()

function palindrome(str){
    const calPal = str
    
    .toLowerCase() //lowercase string
    .split(''); //split lowercased string into array of characters
    //.join array method takes the array from split, and adds them or concantenates them
    //if conditional checks if the added string is equal to it's reversed state
    if(calPal.join('') === calPal.reverse().join('')){
      return true;
    }else{
      return false;
    }
  }
  
   console.log(palindrome('racecar'));


//reverse without using the reverse method

function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

// Example usage:
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

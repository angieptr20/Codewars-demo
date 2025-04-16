/*
Happy Holidays fellow Code Warriors!
Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
*/

function sortGiftCode(code){
    //TODO 
      return code.split('').sort().join('');
  }


//OTHER SOLUTION (COMPLICATED)
function sortGiftCode(str) {
    let sorted = []; // Initialize an empty array to store sorted characters
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i]; // Get the current character
      
      // Find the correct position in the sorted array and insert the character
      let j = 0;
      while (j < sorted.length && char > sorted[j]) {
        j++;
      }
      sorted.splice(j, 0, char); // Insert the character at the correct position
    }
    
    return sorted.join(""); // Combine the sorted array back into a string
  }
  
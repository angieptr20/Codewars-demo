/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {

    //   Split to array
      const words = str.split(" ");
    
      // Reverse each word in the array
      //   map to map each letter
      const reversedWords = words.map(word => {
    
      let reversedWord = "";
    
    //     5 => i = word.length -1 = 4 i >=0 ; i--
    
        for (let i = word.length - 1; i >= 0; i--) {
    //       0,1,2,3
    //       3,2,1,0
          reversedWord += word[i];
        }
        return reversedWord;
      });
      // Join the reversed words back into a string with spaces
      return reversedWords.join(" ");
}

//OTHER SIMILAR 
function reverseWords(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr.split(" ").reverse().join(" ");
}

//OTHER SOLUTION USING MAP
function reverseWords(str) {
    return str.split(' ').map(a => a.split('').reverse().join('')).join(' ')
}

//WITHOUT MAP AND USING EACH METHOD TWICE
function reverseWords(str) {
    //split words and then characters into separate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
  }

/* 
1. str.split("") – This splits the string into an array of individual characters.
2. .reverse() – This reverses the entire array of characters.
3. .join("") – This joins the characters back into a string, which means the whole string is reversed at this point.
4. .split(" ") – This splits the reversed string by spaces, creating an array where each element corresponds to a word (now reversed).
5. .reverse() – This reverses the order of those words back to their original positions.
6. .join(" ") – This joins the words back into a single string with spaces preserved.
  
  
1. Split characters:
    "Hello  world!" → ['H', 'e', 'l', 'l', 'o', ' ', ' ', 'w', 'o', 'r', 'l', 'd', '!']
2. Reverse characters:
    ['!', 'd', 'l', 'r', 'o', 'w', ' ', ' ', 'o', 'l', 'l', 'e', 'H'] → "!dlrow  olleH"
3. Split by spaces:
    "!dlrow  olleH" → ['!dlrow', '', 'olleH'] (Notice that the extra space creates an empty string in the array.)
4. Reverse word order:
    ['olleH', '', '!dlrow']
5. Join words back into a string:
    "olleH  !dlrow"
*/


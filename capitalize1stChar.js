/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
    String.prototype,
    'toJadenCase',
    { value :
     function toJadenCase() {
          let words = this.split(' '); // Split the string into an array of words
          let result = []; // Create an empty array to store the modified words
  
          for (let i = 0; i < words.length; i++) {
              let word = words[i];
  
              if (word.length > 0) { // Ensure the word is not empty
                  word = word.charAt(0).toUpperCase() + word.slice(1); //this is doing 'hello' --> word = 'H' + 'ello'
              }
  
              result.push(word); // Add the modified word to the result array
          }
  
          return result.join(' '); // Rejoin words into a string
  
       
      }
  })

// Example usage:
console.log("how can mirrors be real if our eyes aren't real".toJadenCase());
// Output: "How Can Mirrors Be Real If Our Eyes Aren't Real"


Object.defineProperty(
    String.prototype, 'toJadenCase', 
    { value: 
     function() {
        return this.split(' ') // Split string into words
            .map(function(word) {
                return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first letter
            })
            .join(' '); // Recombine words into a sentence
    }
});

/*
When you define a method inside String.prototype, it becomes available to all string instances. This means this will automatically refer to whatever string the method is called on.

- Here, "hello world".toJadenCase() executes the method on "hello world".
- Inside toJadenCase(), this represents "hello world", allowing .split(' ') and other methods to work on it.

Using "this" makes it possible for the function to operate on any string without needing an argument! That’s why methods inside String.prototype use this.
*/

String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

String.prototype.toJadenCase = function () {

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

return this.split(' ').map(capitalizeFirstLetter).join(' ');
};  
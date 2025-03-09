//Create a function with two arguments that will return an array of the first n multiples of x. Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language --JavaScript).
//x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10] OR x = 2, n = 5  --> [2,4,6,8,10]

//Solution
function countBy(x, n) {
    let z = []   //An array must be returned because we are getting a list of numbers(multiples)
    for(let i = 1; i <= n; i++){
      z.push(x * i); //the push method is being used to push every multiple from the loop into the array
    } 
    return z;
  }

//If i started at 0, the first value in the array would be x * 0 = 0, which is incorrect because we want positive multiples. Since i can be <=, the loop runs 5 times if we pass n as n = 5.
// Example:
// If x = 3 and n = 5:

// Starting at 1 → [3×1, 3×2, 3×3, 3×4, 3×5] = [3, 6, 9, 12, 15] 
// Starting at 0 → [3×0, 3×1, 3×2, 3×3, 3×4] = [0, 3, 6, 9, 12]  (incorrect first value)
// Since the problem statement specifies that both numbers are positive, we start i at 1 to ensure the output contains positive multiples.  



//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopWord (word, num){
    for(let i = 0; i < num; i++){
        console.log(word)    //because i starts at 0 and it is less than 5, it produces "word" and the loop runs 5 times when i is --> 0, 1, 2, 3, and 4. Not 5.
    }
}

loopWord('hello', 5);




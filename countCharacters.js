// Given a string of characters, return the character that appears the most often.

//parameter is a string
//return character that appears most often

//example: ('Max Character", 'a')
//example: ("Hello World!"), "l")
//example: ('Hello!!!', '!')

//for loop to loop through character and keep count of characters

function max (word){

    let frequency = {}
    let charCount = word.toLowerCase().split('')

    let maxNumber = 0;
    let maxLetter = ''
   
    console.log(charCount)

   for(let character of charCount){
       if(frequency[character]){
            frequency[character] += 1
       }else{
        frequency[character] = 1
       }

       if(frequency[character] > maxNumber){
            maxLetter = character;
            maxNumber = frequency[character]
       }
    }
    console.log(frequency)
    return maxLetter
    
}

console.log(max('hello world'))


// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });
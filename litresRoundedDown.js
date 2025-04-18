// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  
  return Math.floor(time / 2);

}

//OR
function litres(time) {
    return Math.floor(time * 0.5);
}

console.log(litres(3));   // Output: 1
console.log(litres(6.7)); // Output: 3
console.log(litres(10));  // Output: 5
console.log(litres(0));   // Output: 0
console.log(litres(1.5)); // Output: 0  

//ARROW FUNCTION
const litres = time => Math.floor(time / 2);

// Should you use a variable?
// If you want clarity and better readability, especially for beginners, you could use a variable like this:

function litres(time) {
    const totalLitres = Math.floor(time * 0.5); // Store the calculation
    return totalLitres;
}

console.log("Total Litres:", totalLitres);
//Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return a ** b
}

// Example usage:
console.log(exponent(2, 3)); // 8
console.log(exponent(5, 2)); // 25

function subt(a,b){
    return a - b
}


//OR

function exponent(a, b) {
    return Math.pow(a, b);
}

// Example usage:
console.log(exponent(2, 3)); // 8 (2³)
console.log(exponent(5, 2)); // 25 (5²)

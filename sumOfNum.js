// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


var summation = function (num) {

    let sum = 0
    for(let i = 1; i <= num; i++){
      sum += i
    }
    return sum
}

var summation = function (num) {
    return num * (num + 1) / 2; // example of an efficient solution where it is in constant time (One operation with multiple inputs) using contiguous integers (1, 2, 3, 4, 5)
}


//    ****ATTEMPT****

//Array is in ascending order with an increment of 1, return the missing numbers

let previousNum = 0;
let nextNum = 0;
let num = 0;


function getRemovedNumber(arr, m){ //need to involve m somehow
    //let i = m
    for (let i = 0; i < arr.length; i++){
        previousNum = arr[i - 1]
        nextNum = arr[i + 1]
        if(nextNum - previousNum > 1){
            num =  (nextNum + previousNum) / 2
        }
    }
    return num

}


//if m = 1, that means the first missing number

// (arr, m)

//([1, 2, 3, 5, 6, 8, 10, 14], 1) --> output is 4

//([1, 2, 3, 5, 6, 8, 10, 14], 2) --> output is 7


//    ****SOLUTION****

function getRemovedNumber(arr, m) {
    let missingNumbers = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        let next = arr[i + 1];

        // If there's a gap in the sequence, find missing numbers
        while (next - current > 1) {
            missingNumbers.push(current + 1);
            current++;
        }
    }
    
    // Return the m-th missing number
    return missingNumbers[m - 1] || null; // Return null if m is out of range
}

// Test cases
console.log(getRemovedNumber([1, 2, 3, 5, 6, 8, 10, 14], 1)); // Output: 4
console.log(getRemovedNumber([1, 2, 3, 5, 6, 8, 10, 14], 2)); // Output: 7
console.log(getRemovedNumber([1, 2, 3, 5, 6, 8, 10, 14], 3)); // Output: 9

/*
Explanation:
- We loop through the array, checking gaps between consecutive numbers.
- If a gap exists (next - current > 1), we add the missing numbers to missingNumbers.
- We return the m-th missing number (adjusting for 0-based indexing).
- If m is larger than the number of missing values, we return null.
*/
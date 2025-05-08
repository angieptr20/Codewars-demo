/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
a can contain numbers or strings. x can be either.
Return true if the array contains the value, false if not.
*/

function check(a, x) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === x) {
        return true;
      }
    }
    return false;
}

//SOLUTION WITH INCLUDES
function check(a, x) {
    return a.includes(x);
  }

// Test cases
console.log(check([1, 2, 3, 4, 5], 3));  // Output: true
console.log(check(["apple", "banana", "cherry"], "orange"));  // Output: false
console.log(check(["hello", 42, "world"], 42));  // Output: true

//SOLUTION WITH INDEXOF
function check(a, x) {
    return a.indexOf(x) !== -1;
}

// Test cases
console.log(check([1, 2, 3, 4, 5], 3));  // Output: true
console.log(check(["apple", "banana", "cherry"], "orange"));  // Output: false
console.log(check(["hello", 42, "world"], 42));  // Output: true

// Unlike .indexOf(), which returns -1 when an item is not found (non-existent), .includes() directly gives you a Boolean result, making it simpler for presence checks.

/*
| Method            | Purpose                                                
|------------------ |------------------------------------------------------
| `.includes(x)`    | Checks if **a specific value** exists in the array.   
| `.some(callback)` | Checks if **at least one element** meets a condition. 
| `.every(callback)`| Checks if **all elements** meet a condition.       
*/
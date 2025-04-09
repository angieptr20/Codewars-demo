//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s){ 
    return s.split('!').join('');
}

// Example usage:
console.log(removeExclamationMarks("Hello! World!!"));  // "Hello World"
console.log(removeExclamationMarks("Wow!!! This is great!!!"));  // "Wow This is great"
console.log(removeExclamationMarks("No exclamation mark here"));  // "No exclamation mark here"

//OR

function removeExclamationMarks(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '!') {
            result += s[i];
        }
    }
    return result;
}

// Example usage:
console.log(removeExclamationMarks("Hello! World!!"));  // "Hello World"
console.log(removeExclamationMarks("Wow!!! This is great!!!"));  // "Wow This is great"
console.log(removeExclamationMarks("No exclamation mark here"));  // "No exclamation mark here"
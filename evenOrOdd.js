//create a function that takes in a number and returns 'Even' if the number is even or 'Odd' if it is odd
function evenOrOdd(number) {
    if(number % 2 === 0 ){
      return 'Even'
    }
    else if(number % 2 !== 0){
      return 'Odd'
    }
  }

//better solution
function evenOrOdd(number) {
    if (number % 2 === 0){
      return "Even"
    }else{
      return "Odd"
      }
  }

//even better solution using ternary operators

function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }
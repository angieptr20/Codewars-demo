// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

function getAverage(grades) {
    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    return Math.floor(total / grades.length); // round down
}


// Use array.reduce(), divided by array.length and put into Math.floor

function getAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return Math.floor(total / grades.length);
  }
  
//   .reduce() loops through the array and adds up all the values.

//   sum is the accumulator, and grade is the current item.
  
//   0 is the initial value of the accumulator.

getAverage([2, 2, 2, 2]); // returns 2
getAverage([1, 2, 3, 4, 5]); // returns 3
getAverage([1, 1, 1, 1, 1, 1, 1, 2]); // returns 1
/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/

const areaOrPerimeter = function(l, w) {
    return l === w ? l * w : 2 * (l + w);
  };
  
// Test cases
console.log(areaOrPerimeter(6, 10)); // Output: 32 (Perimeter of a rectangle)
console.log(areaOrPerimeter(3, 3));  // Output: 9 (Area of a square)

/*
Explanation:
- If l === w, it's a square, so we return l * w (area).
- Otherwise, it's a rectangle, and we return 2 * (l + w) (perimeter).
*/
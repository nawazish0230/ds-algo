/*

Spiral Traversal of Matrix

Problem Statement: Given a Matrix, print the given matrix in spiral order.

Examples:

Example 1:
Input: Matrix[][] = { { 1, 2, 3, 4 },
		                  { 5, 6, 7, 8 },
		                  { 9, 10, 11, 12 },
	                    { 13, 14, 15, 16 } }

Outhput: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.
Explanation: The output of matrix in spiral form.

Example 2:
Input: Matrix[][] = { { 1, 2, 3 },
	              { 4, 5, 6 },
		      { 7, 8, 9 } }

Output: 1, 2, 3, 6, 9, 8, 7, 4, 5.
Explanation: The output of matrix in spiral form.

*/

const spiralTraversal = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;
  let left = 0,
    right = m - 1;
  let top = 0,
    bottom = n - 1;

  let ans = [];

  while (top <= bottom && left <= right) {
    // for top -> right
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]); // going top -> left so top is constant
    }
    top++;

    // for top -> bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]); // going bottom so constant is right
    }
    right--;

    if (top <= bottom) { // handle edgecase if there is single line only
      // for right -> left
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) { // handle edgecase if there is single line only
      // for bottom -> top
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }

  console.log(ans);
};

spiralTraversal([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);

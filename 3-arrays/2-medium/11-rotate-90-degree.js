/*
Rotate Image by 90 degree

Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

Note: Rotate matrix 90 degrees anticlockwise

Example 1:
Input: [[1,2,3],[4,5,6],[7,8,9]]
Output : [[7,4,1],[8,5,2],[9,6,3]]
Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix.

Example 2:
Input: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix

*/

/*
1. Bruteforce
- create answMatrix array
- take first row and put it on last column
- take second row and put it on last 2nd column
*/

const rotateImage1 = (matrix) => {
  const n = matrix.length;
  const tempMatrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      tempMatrix[j][n - 1 - i] = matrix[i][j];
    }
  }

  console.log(tempMatrix);
};
// T.C -> O(N^2)
// S.C -> O(N^2)
// rotateImage1([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

/*
1. Optimal (refer copy)
*/

const rotateImage2 = (matrix) => {
  const n = matrix.length;

  // transpose -> column is changed into row
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reversing each row of the matrix
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  console.log(matrix);
};
// T.C -> O(N/2 * N/2) + O(n * N/2)
// S.C -> O(1)

// rotateImage2([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ]);
rotateImage2([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

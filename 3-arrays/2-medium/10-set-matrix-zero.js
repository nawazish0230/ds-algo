/*
Set Matrix Zero

- Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column 
and row to 0 and then return the matrix.
- Jha v zero milega uske row & column ko zero krdena hai

Examples 1:
Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.

Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
Explanation: Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

*/

// Bruteforce |
const markRow = (i, arr) => {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i][j] !== 0) {
      arr[i][j] = -1;
    }
  }
};

const markCol = (j, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][j] !== 0) {
      arr[i][j] = -1;
    }
  }
};

const setMatrixZero1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        markRow(i, arr[i]);
        markCol(j, arr);
      }
    }
  }

  // Finally, mark all -1 as 0:
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === -1) {
        arr[i][j] = 0;
      }
    }
  }
  console.log(arr);
};
// T.C -> (m * n) * (m + n) + (m * n) = O(n ^3)

// setMatrixZero1([
//   [1, 1, 1, 1],
//   [1, 0, 0, 1],
//   [1, 1, 0, 1],
//   [1, 1, 1, 1],
// ]);

/*
2. Better appraoch | (refer copy)
- 
*/

const setMatrixZero2 = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;
  const row = new Array(n).fill(0);
  const col = new Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  console.log(row, col, matrix);
};

// T.C -> O(2*n*m) = O(N^2)
// S.C -> O(n) + O(m)

// setMatrixZero2([
//   [1, 1, 1, 1],
//   [1, 0, 1, 1],
//   [1, 1, 0, 1],
//   [1, 0, 0, 1],
// ]);

/*
3. Optimal Approach | REVISIT: didnt understood
understood approach by (nikhil lohia) but code didn't able to grasp completely
*/

function setZeroes3(matrix) {
  let firstRow = false,
    firstCol = false;

  const n = matrix.length;
  const m = matrix[0].length;

  // Set markers in the first row and first column
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) firstRow = true;
        if (j === 0) firstCol = true;
        matrix[0][j] = 0; // Mark the column in the first row
        matrix[i][0] = 0; // Mark the row in the first column
      }
    }
  }

  // Replace inner matrix using markers
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Set the first row to zero if needed
  if (firstRow) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  // Set the first column to zero if needed
  if (firstCol) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
  console.log(matrix)
}

// T.C -> O(2*n*m) + n+m = O(N^2)
// S.C -> O(1) // here space complexity is optimized

setZeroes3([
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [1, 0, 0, 1],
]);

/*

Program to generate Pascal's Triangle

Problem Statement: This problem has 3 variations. They are stated below:

Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.

Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.

In Pascal’s triangle, each number is the sum of the two numbers directly above it as shown in the figure below:


Example 1:
Input Format: N = 5, r = 5, c = 3
Result:
6 (for variation 1)
1 4 6 4 1 (for variation 2)
1 
1 1 
1 2 1 
1 3 3 1 
1 4 6 4 1    (for variation 3)

Explanation: There are 5 rows in the output matrix. Each row is formed using the logic of Pascal’s triangle.

Example 2:
Input Format: N = 1, r = 1, c = 1
Result:
    1 (for variation 1)
    1 (for variation 2)
    1 (for variation 3)

Explanation: The output matrix has only 1 row.
*/

/*
a) row number r and column number c. Print the element at position (r, c)  | using formulae
*/

const findnCrWithFormulae1 = (n, r) => {
  let res = 1;
  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = res / (i + 1);
  }
  return res;
};

const r1 = 5; // row number
const c1 = 3; // col number
// const val1 = findnCrWithFormulae1(r1 - 1, c1 - 1);
// console.log(val1);

// T.C: O(c), where c = given column number.

/*
b) Print the n-th row
*/

const findnCrWithFormulae2 = (n, r) => {
  let ans = 1;
  console.log(ans);

  for (let i = 1; i < n; i++) {
    ans = ans * (n - i);
    ans = ans / i;
    console.log(ans);
  }
};
// findnCrWithFormulae2(5);
// T.C -> O(N)

/*
c) Given N, Print the first n rows of Pascal’s triangle. | Bruteforce
*/

const findnCr = (n, r) => {
  let ans = 1;
  for (let i = 0; i < r; i++) {
    ans = ans * (n - i);
    ans = ans / (i + 1);
  }
  return Number(ans);
};
// findnCr(5);

// REVISIT: need to understand it clearly
const findnCr3 = (n) => {
  const ans = [];
  for (let row = 1; row <= n; row++) {
    const tempList = [];
    for (let col = 1; col <= row; col++) {
      tempList.push(findnCr(row - 1, col - 1));
    }
    ans.push(tempList);
  }
  console.log(ans);
};
// findnCr3(5);

// c) Optimal Approach |

function generateRow(row) {
  let ans = 1;
  let ansRow = [1]; 

  for (let col = 1; col < row; col++) {
    ans = ans * (row - col);
    ans = ans / col;
    ansRow.push(ans);
  }
  return ansRow;
}

function pascalTriangle4(n) {
  let ans = [];

  for (let row = 1; row <= n; row++) {
    ans.push(generateRow(row));
  }
  return ans;
}

let n = 5;
let ans = pascalTriangle4(n);
for (let i = 0; i < ans.length; i++) {
  console.log(ans[i].join(" "));
}

/* 
Sum of first N Natural Numbers
Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.
*/

/*

Example 1:
Input: N=5
Output: 15
Explanation: 1+2+3+4+5=15

*/

// Approach 1. Using formula -> N(N+1)/2

const sumNumbers1 = (n) => {
  const sum = (n * (n + 1)) / 1;
  console.log(sum);
};
// sumNumbers1(5);

// Approach 2. Using recursion using parameter
const sumRecursion = (n, sum) => {
  if (n < 1) {
    console.log(sum);
    return;
  }
  // sum += n;
  sumRecursion(n - 1, sum + n);
};

// sumRecursion(5, 0);

// Approach 3. Using recursion using functional way
const sumRecursionFunctional = (n) => {
  if (n === 0) return 0;
  return n + sumRecursionFunctional(n - 1);
};

// console.log(sumRecursionFunctional(5))

const sumSquareFunctional = (n) => {
  if (n === 0) return 0;
  return n * n * n + sumSquareFunctional(n - 1);
};
console.log(sumSquareFunctional(5));

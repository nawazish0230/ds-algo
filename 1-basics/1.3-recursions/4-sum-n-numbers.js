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

/* Recursive way of calculating the sum of first N Natural Numbers:
1. Parameterized Way
2. Functional Way
*/

// Approach 1. Using formula -> N(N+1)/2

const sumNumbers1 = (n) => {
  const sum = (n * (n + 1)) / 1;
  console.log(sum);
};
// T.C -> O(n)
// sumNumbers1(5);

// Approach 2. Using recursion using parameter (Parameterized Way)
const sumRecursion = (n, sum) => {
  if (n < 1) {
    console.log(sum);
    return;
  }
  // sum += n;
  sumRecursion(n - 1, sum + n);
};
// T.C -> O(n)
sumRecursion(5, 0);

// Approach 3. Using recursion using (functional way)
const sumRecursionFunctional = (n) => {
  if (n === 0) return 0;
  return n + sumRecursionFunctional(n - 1);
};
// T.C -> O(n)
// console.log(sumRecursionFunctional(5))

const sumSquareFunctional = (n) => {
  if (n === 0) return 0;
  return n * n * n + sumSquareFunctional(n - 1);
};

console.log(sumSquareFunctional(5));
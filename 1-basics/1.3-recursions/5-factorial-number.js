/*
Q: Factorial of a Number : Iterative and Recursive

Problem Statement: Given a number X,  print its factorial.

To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it. More precisely X! = X*(X-1)*(X-2) … 1.
Note: X  is always a positive number. 

Examples:
Example 1:
Input: X = 5
Output: 120
Explanation: 5! = 5*4*3*2*1

Example 2:
Input: X = 3
Output: 6
Explanation: 3!=3*2*1

*/

// 1. using functional function
const getFactorial = (n) => {
  if (n < 2) return null; // if(n === 0) return 1
  return n * getFactorial(n - 1);
};
// T.C -> O(n)
// console.log(getFactorial(3));

// 2. using parameterised way
const getParameterizedFactorial = (n, factorial) => {
  if (n < 1) {
    console.log(factorial);
    return;
  }
  getParameterizedFactorial(n - 1, n * factorial);
};
// T.C -> O(n)
// getParameterizedFactorial(5, 1);
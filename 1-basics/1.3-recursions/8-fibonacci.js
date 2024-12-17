/*
Q: Print Fibonacci Series up to Nth term

Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

Examples:

Example 1:
Input: N = 5
Output: 0 1 1 2 3 5
Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)

Example 2:
Input: 6

Output: 0 1 1 2 3 5 8
Explanation: 0 1 1 2 3 5 8 is the fibonacci series upto 6th term.(o based indexing)

*/

// 1. Using Multiple recusrion calls
const findFibonacci = (n) => {
  if (n <= 1) return n;
  const last = findFibonacci(n - 1);
  const sLast = findFibonacci(n - 2);
  console.log(last, sLast);
  return last + sLast;
};

/*
                  fn(4)
            fn(3)           fn(2)
      fn(2)     fn(1)    fn(1)  fn(0)
    fn(1) fn(0)
*/

// T.C -> 2^n

console.log(findFibonacci(5));

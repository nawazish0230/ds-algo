/*

Problem Statement: Given an integer N, return all divisors of N.
A divisor of an integer N is a positive integer that divides N without leaving a remainder. 
In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

Examples
Example 1:
Input:N = 36
Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]
Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.

Example 2:
Input:N =12
Output: [1, 2, 3, 4, 6, 12]
Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.

*/

// 1. Bruteforce
const findDivisors = (n) => {
  let sum = 0; // adding all divisor value

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i); // we can log divisor here
      sum += i;
    }
  }
  return sum;
};

// 2. Optimized way
const findOptimizedDivisors = (n) => {
  let divisors = [];
  // let sum = 0;
  let sqrtN = Math.sqrt(n); // alternatively we can write => (i * i < n)

  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      divisors.push(i);
      // sum += i;
      // for same factor, in e.g 36 (6 * 6)
      if (i !== n / i) {
        divisors.push(n / i);
        // sum += n / i;
      }
    }
  }
  // return sum;
  return divisors.sort((a, b) => a - b);
};
// TC ->  O(sqrt(N)) + O(Nlog(N)) (N is no. of factors)

// slightly different problem in geeksforgeeks (https://www.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1)
const sumOfDivisors = (n) => {
  let finalSum = 0;
  for (let i = 1; i <= n; i++) {
    // finalSum += findDivisors(i);
    finalSum += findOptimizedDivisors(i);
  }
  return finalSum;
};

// console.log(findDivisors(4));

console.log(findOptimizedDivisors(4));

// console.log(sumOfDivisors(4));

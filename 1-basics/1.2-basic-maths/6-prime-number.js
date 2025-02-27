/*

Problem Statement: Given an integer N, check whether it is prime or not. 
A prime number is a number that is only divisible by 1 and itself (wrong defination) 
The number which have 2 divisor and the total number of divisors is 2.

Example 1:
Input:N = 2
Output:True
Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).

Example 2:
Input:N =10
Output: False
Explanation: 10 is not prime, it is a composite number because it has 4 divisors: 1, 2, 5 and 10.

*/

// 1. Bruteforce
const findPrimeNumber = (n) => {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count === 2 ? true : false;
};

// 2. optimal approach
const optimizedPrimeNumber = (n) => {
  let count = 0;
  const sqrtN = Math.sqrt(n);
  for (let i = 0; i <= sqrtN; i++) {
    if (n % i === 0) {
      count++;
      if (i !== n / i) {
        count++;
      }
    }
  }
  return count === 2 ? true : false;
};

// console.log(findPrimeNumber(5));
console.log(optimizedPrimeNumber(23));

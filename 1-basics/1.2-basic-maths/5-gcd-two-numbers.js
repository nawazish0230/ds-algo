/*

Q: Given two integers N1 and N2, find their greatest common divisor.
The Greatest Common Divisor of any two integers is the largest number that divides both integers.


Example 1:
Input:N1 = 9, N2 = 12
Output:3

Explanation: Factors of 9: 1, 3 and 9
Factors of 12: 1, 2, 3, 4, 6, 12
Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.

-----------------

Example 2:
Input:N1 = 20, N2 = 15

Output: 5
Explanation:Factors of 20: 1, 2, 4, 5
Factors of 15: 1, 3, 5
Common Factors: 1, 5 out of which 5 is the greatest hence it is the GCD.
*/

// 1. mine implmentation
const findGcd1 = (a, b) => {
  const factor = new Set();
  const secondFactor = new Set();
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      factor.add(i);
    }
  }
  for (let i = 1; i <= b; i++) {
    if (b % i === 0 && factor.has(i)) secondFactor.add(i);
  }
  return [...secondFactor].pop();
};

// 2. bruteforce implmentation
const findGcd2 = (a, b) => {
  let val = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      val = i;
    }
  }
  return val;
};

// 3. Euclidean algorithm (IMP)
// gcd(52, 10) -> gcd(a - b, b) | a > b -> this also workss but it takes lot of time % will be short cicuiting
// gcd(52, 10) -> gcd(a % b, b) | a > b
const findGcd3 = (a, b) => {
  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else b = b % a;

    if (a === 0) return b;
    else return a;
  }
};
// TC -> O(logΦ(m(a, b))) | O(min(N1, N2))

// console.log(findGcd1(9, 12));
console.log(findGcd3(52, 10));

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

// 2.mine implementation same as above
const findGcd2 = (N1, N2) => {
  const arr1 = [];
  const arr2 = [];
  for (let i = 1; i <= N1; i++) {
    if (N1 % i === 0) {
      arr1.push(i);
    }
  }
  for (let i = 1; i <= N2; i++) {
    if (N2 % i === 0 && arr1.includes(i)) {
      arr2.push(i);
    }
  }
  console.log(arr2);
};

// 3. bruteforce implmentation
// const findGcd3 = (a, b) => {
//   let val = 1;
//   for (let i = 1; i <= Math.min(a, b); i++) {
//     if (a % i === 0 && b % i === 0) {
//       val = i;
//     }
//   }
//   return val;
// };

// 3. bruteforce implmentation better than above
// instead of going from 1 to n we can go n to 1, to get the highest no. & break the loop
const findGcd3 = (a, b) => {
  let val = 1;
  for (let i = Math.min(a, b); i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      val = i;
      break;
    }
  }
  return val;
};
// T.C -> O(min(n, m))

// 4. *Euclidean algorithm (IMP)
// gcd(52, 10) -> gcd(a - b, b) | a > b -> this also workss but it takes lot of time % will be short cicuiting
// gcd(52, 10) -> gcd(a % b, b) | a > b
const findGcd4 = (a, b) => {
  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else b = b % a;

    if (a === 0) return b;
    else return a;
  }
};
// TC -> O(logΦ(m(a, b))) | O(min(N1, N2))
// Φ -> as here its fluctuating not constant so not base 10 or base 5 etc.

// findGcd1(9, 12);
// console.log(findGcd1(9, 12));
console.log(findGcd3(4, 8));

// 5. LCM using euclidian formula
const findLCM = (a, b) => {
  const val = Math.abs(a * b) / findGcd4(a, b);
  console.log(val)
};

// 6. lcm using normal approach
const lcm = (a, b) => {
  // Find the larger and smaller numbers
  let larger = Math.max(a, b);
  let smaller = Math.min(a, b);

  // Start with the larger number and check its multiples
  let lcm = larger;
  while (lcm % smaller !== 0) {
    lcm += larger;
  }
  return lcm;
};

findLCM(5, 10)

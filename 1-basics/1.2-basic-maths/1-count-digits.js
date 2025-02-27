/*

Input:N = 12345
Output:5
Explanation:  The number 12345 has 5 digits.

*/

// 1. bruteforce approach
const countDigit1 = (n) => {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    // let lastdigit = n % 10;
    count++;
  }
  console.log(count);
};
// T.C -> O(log10(N)) as division is happening by "10" (as no of times division happens by 10)

// 2. Optimal approach
const countDigit2 = (n) => {
  // The expression Math.floor(Math.log10(n) + 1) calculates the number of digits in 'n'
  // and rounds it down to the nearest whole number.

  // Adding 1 to the result accounts or the case when 'n' is a power of 10, ensuring that the count is correct.
  let count = Math.floor(Math.log10(n) + 1);
  console.log(count);
};
// T.C -> O(1) -  simple arithmetic operation in constant time


// geeksforgeeks version (https://www.geeksforgeeks.org/problems/count-digits5716/1)
const countDigit3 = (n) => {
  let count = 0;

  const temp = n;
  while (n > 0) {
    const last = n % 10;
    const isDivisible = temp % last === 0;
    if (isDivisible) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  return count;
};

countDigit1(12345);

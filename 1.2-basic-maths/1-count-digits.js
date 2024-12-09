/*

Input:N = 12345
Output:5
Explanation:  The number 12345 has 5 digits.

*/

const countDigit = (n) => {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    // let lastdigit = n % 10;
    count++;
  }
  console.log(count);
};
countDigit(12345);

// T.C -> O(log10(N)) as division is happening by "10"

/*

Example 1:
Input:N = 12345
Output: 54321

Example 2:
Input:N = 10400
Output: 401

*/

const minInt = -Math.pow(2, 31);
const maxInt = -minInt - 1;

const reverseDigit = (x) => {
  let reverseNum = 0;

  const isNegative = x < 0;
  if (isNegative) {
    x = -x;
  }
  while (x > 0) {
    const lastDigit = x % 10; // this is for getting last digit
    // if (lastDigit > 0 || reverseNum) reverseNum += lastDigit; this returns string
    reverseNum = reverseNum * 10 + lastDigit;
    x = Math.floor(x / 10); // this for removing the number from count
  }

  if (reverseNum > maxInt) return 0;
  return isNegative ? -reverseNum : reverseNum;
};

const reverseDigit1 = (n) => {
  let reverse = "";
  const isNegative = n < 0;
  n = Math.abs(n);

  while (n > 0) {
    let lastDigit = n % 10;
    reverse += lastDigit;
    n = Math.floor(n / 10);
  }

  if (reverse > maxInt) return 0;
  console.log(isNegative ? -Number(reverse) : Number(reverse));
};

reverseDigit1(123);

/*

Example 1:
Input:N = 153
Output:True
Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153

Example 2:
Input:N = 371
Output: True
Explanation: 3^3+5^3+1^3 = 27 + 343 + 1 = 371

*/

const isArmstrong = (x) => {
  let numCount = 0;
  let tempx = x;
  let numX = x;

  let sum = 0;

  // calculating count of number
  while (x > 0) {
    x = Math.floor(x / 10);
    numCount++;
  }

  while (numX > 0) {
    let lastDigit = numX % 10;

    sum += Math.pow(lastDigit, numCount);
    numX = Math.floor(numX / 10);
  }
  return tempx === sum ? true : false;
};

isArmstrong(153);

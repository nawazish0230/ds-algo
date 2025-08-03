/*

Example 1:
Input Format: N = 5, array[] = {1,2,4,5}
Result: 3
Explanation:  In the given array, number 3 is missing. So, 3 is the answer.

*/

const missingNumber1 = (arr) => {
  const n = arr.length;
  const hash = new Array(n + 1).fill(0); // Extra space for 0 and n+1

  // Mark all present numbers
  for (let num of arr) {
    hash[num] = 1;
  }
  // First check for 0
  if (hash[0] === 0) {
    return 0;
  }
  // Then check for numbers from 1 to n+1
  for (let i = 1; i <= n + 1; i++) {
    if (hash[i] === 0) {
      return i;
    }
  }
  // This line should theoretically never be reached
  return -1;
};

console.log(missingNumber1([3, 0, 1]));
console.log(missingNumber1([1, 0]));
console.log(missingNumber1([1]));
console.log(missingNumber1([0]));

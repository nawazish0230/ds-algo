/*

Length of the longest subarray with zero Sum


Problem Statement: Given an array containing both positive and negative integers, 
we have to find the length of the longest subarray with the sum of all elements equal to zero.

Example 1:
Input Format : N = 6, array[] = {9, -3, 3, -1, 6, -5}
Result : 5
Explanation : The following subarrays sum to zero:
{-3, 3} , {-1, 6, -5}, {-3, 3, -1, 6, -5}
Since we require the length of the longest subarray, our answer is 5!

Example 2:
Input Format: N = 8, array[] = {6, -2, 2, -8, 1, 7, 4, -10}
Result: 8
Subarrays with sum 0 : {-2, 2}, {-8, 1, 7}, {-2, 2, -8, 1, 7}, {6, -2, 2, -8, 1, 7, 4, -10}
Length of longest subarray = 8

Example 3:
Input Format: N = 3, array[] = {1, 0, -5}
Result : 1
Subarray : {0}
Length of longest subarray = 1

Example 4:
Input Format: N = 5, array[] = {1, 3, -5, 6, -2}
Result : 0
Subarray: There is no subarray that sums to zero


*/

const longestSubarrayZero1 = (arr) => {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 0) {
        max = Math.max(max, j - i + 1); // current j index - i index + 1 as i starts from 0
      }
    }
  }
  console.log(max);
};

// longestSubarrayZero1([9, -3, 3, -1, 6, -5]);
// longestSubarrayZero1([6, -2, 2, -8, 1, 7, 4, -10]);

const longestSubarrayZero2 = (arr) => {
  let max = 0;
  let sum = 0;

  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      // sum jese 0 hoa mtlb start index se current index tk subarray 0 derha hai
      max = i + 1;
    } else {
      if (map.has(sum)) {
        // yha pe check krrhe hai ki sum k value map hai ?
        max = Math.max(max, i - map.get(sum)); // current index - jha tk sum k index
      } else {
        map.set(sum, i);
      }
    }
  }
  console.log(max);
};

longestSubarrayZero2([6, -2, 2, -8, 1, 7, 4, -10]);
longestSubarrayZero2([15, -2, 2, -8, 1, 7, 10, 23]);

/*
Count Maximum Consecutive One's in the array

Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.


Example 1:
Input: prices = {1, 1, 0, 1, 1, 1}
Output: 3
Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

Input: prices = {1, 0, 1, 1, 0, 1} 
Output: 2
Explanation: There are two consecutive 1's in the array. 

*/

const maximumConsecutive = (arr) => {
  let count = 0,
    maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count = 0;
    } else {
      count++;
    }
    if (count > maxCount) {
      maxCount++;
    }

    // another simple way
    // if (arr[i] === 1) {
    //   count++;
    //   maxCount = Math.max(maxCount, count);
    // } else {
    //   count = 0;
    // }
  }
  console.log(maxCount);
};

maximumConsecutive([1, 0, 1, 1, 0, 1]);

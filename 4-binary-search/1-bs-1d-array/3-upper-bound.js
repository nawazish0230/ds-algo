/*

Implement Upper Bound

Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.

Pre-requisite: Binary Search algorithm

Example 1:
Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
Result: 3
Explanation: Index 3 is the smallest index such that arr[3] > x.

Example 2:
Input Format: N = 6, arr[] = {3,5,8,9,15,19}, x = 9
Result: 4
Explanation: Index 4 is the smallest index such that arr[4] > x.

*/

// 1. bruteforce | using for loop
const upperBound1 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      console.log(i);
      return;
    }
  }
};
// upperBound1([1, 2, 2, 3], 2);
// upperBound1([3, 5, 8, 9, 15, 19], 9);

// 2. Optimal | using binary search

const upperBound2 = (arr, target) => {
  const n = arr.length - 1;
  let low = 0,
    high = n;
  let ans = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log(ans);
};

upperBound2([3, 5, 8, 9, 15, 19], 9);

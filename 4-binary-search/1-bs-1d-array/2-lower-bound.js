/*

Implement Lower Bound

Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

Pre-requisite: Binary Search algorithm

Example 1:
Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
Result: 1
Explanation: Index 1 is the smallest index such that arr[1] >= x.

Example 2:
Input Format: N = 5, arr[] = {3,5,8,15,19}, x = 9
Result: 3
Explanation: Index 3 is the smallest index such that arr[3] >= x.

*/

// 1. Using linear search
const lowerBound1 = (arr, target) => {
  let ans = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= target) {
      ans = i;
      break;
    }
  }
  console.log(ans);
};

// T.C -> O(N)
// lowerBound1([1, 2, 2, 3], 2);
// lowerBound1([3, 5, 8, 15, 19], 9);

// 2. Optimal using B.S
const lowerBound2 = (arr, target) => {
  const n = arr.length - 1;
  let low = 0,
    high = n;
  let ans = n;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ans = mid; // maybe the answer
      high = mid - 1; // look for more small index on left
    } else {
      low = mid + 1; // look for right
    }
  }
  console.log(ans);
};
// T.C -> O(log₂N)

// lowerBound2([1, 2, 2, 3], 2);
// lowerBound2([3, 5, 8, 15, 19], 9);

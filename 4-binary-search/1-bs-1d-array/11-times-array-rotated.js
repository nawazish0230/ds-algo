/*
Find out how many times the array has been rotated

Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). 
Now the array is rotated between 1 to N times which is unknown. Find how many times the array has been rotated. 

Pre-requisites: Find minimum in Rotated Sorted Array,  Search in Rotated Sorted Array II & Binary Search algorithm

Example 1:
Input Format: arr = [4,5,6,7,0,1,2,3]
Result: 4
Explanation: The original array should be [0,1,2,3,4,5,6,7]. So, we can notice that the array has been rotated 4 times.

Example 2:
Input Format: arr = [3,4,5,1,2]
Result: 3
Explanation: The original array should be [1,2,3,4,5]. So, we can notice that the array has been rotated 3 times.

*/

// Bruteforce | using linear search
const timeArrayRotated1 = (arr) => {
  let min = Number.MAX_VALUE;
  let index = -1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i
    }
  }

  console.log(index);
};
timeArrayRotated1([4, 5, 6, 7, 0, 1, 2, 3]);


const timeArrayRotated2 = (arr) => {
  let ans = Number.MAX_VALUE;
  let index = -1;

  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // if search space is already sorted, then always arr[low] will be smaller in search space
    if (arr[low] <= arr[high]) {
      // min = Math.min(min, arr[low]);
      if (arr[low] < ans) {
        ans = arr[low];
        index = low;
      }
      break;
    }

    // left is sorted
    if (arr[low] <= arr[mid]) {
      // ans = Math.min(ans, arr[low]);
      if (arr[low] < ans) {
        ans = arr[low];
        index = low;
      }
      low = mid + 1;
    } else {
      // ans = Math.min(ans, arr[mid]);
      if (arr[mid] < ans) {
        ans = arr[mid];
        index = mid;
      }
      high = mid - 1;
    }
  }

  console.log(index);
};
// T.C -> O(log₂N)

// timeArrayRotated2([4, 5, 6, 7, 0, 1, 2, 3]);
// timeArrayRotated2([39, 6, 11, 14, 18, 36, 37, 38]);

/*

Minimum in Rotated Sorted Array [Duplicate]

Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). 
Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array. 

Pre-requisites: Search in Rotated Sorted Array I,  Search in Rotated Sorted Array II & Binary Search algorithm

Example 1:
Input Format: arr = [4,5,6,7,0,1,2,3]
Result: 0
Explanation: Here, the element 0 is the minimum element in the array.

Example 2:
Input Format: arr = [3,4,5,1,2]
Result: 1
Explanation: Here, the element 1 is the minimum element in the array.

*/

// Bruteforce | using linear search
const minimumRotated1 = (arr) => {
  let min = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log(min);
};
// T.C -> O(N)
// minimumRotated1([4, 5, 6, 7, 0, 1, 1, 1, 1, 2, 3]);

const minimumRotated2 = (arr) => {
  let min = Number.MAX_VALUE;

  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[low] === arr[high]) { // need to check not working at some case
      low = low + 1;
      // high = high - 1;
      continue;
    }

    // optimization
    // if search space is already sorted, then always arr[low] will be smaller in search space
    if (arr[low] <= arr[high]) {
      min = Math.min(min, arr[low]);
      break;
    }

    if (arr[low] <= arr[mid]) {
      min = Math.min(arr[low], min);
      low = mid + 1;
    } else {
      // right part sorted
      min = Math.min(arr[mid], min);
      high = mid - 1;
    }
  }
  console.log(min);
};
// T.C -> O(logN)
// minimumRotated2([4, 5, 6, 7, 0, 1, 1, 1, 1, 1, 2, 3]);
minimumRotated2([3, 3, 1, 3]);
minimumRotated2([2, 2, 2, 0, 1]);
minimumRotated2([4, 3, 3]);
minimumRotated2([3, 1, 3, 3, 3]);

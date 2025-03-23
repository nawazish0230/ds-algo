/*
Search Element in a Rotated Sorted Array [Duplicate]

Problem Statement: Given an integer array arr of size N, sorted in ascending order (may contain duplicate values) and a 
target value k. Now the array is rotated at some pivot point unknown to you. 
Return True if k is present and otherwise, return False. 

Example 1:
Input Format: arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 3
Result: True
Explanation: The element 3 is present in the array. So, the answer is True.

Example 2:
Input Format: arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 10
Result: False
Explanation: The element 10 is not present in the array. So, the answer is False.
*/

// 1. Bruteforce | using binary search | done by self
const searchElement1 = (arr, target) => {
  let ans = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) ans = true;
  }
  console.log(ans);
};
// T.C -> O(N)
// searchElement1([7, 8, 1, 2, 3, 3, 3, 4, 5, 6], 3);

const searchElement2 = (arr, target) => {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return true;
    }
    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      // extra code from previous code
      low = low + 1;
      high = high - 1;
      continue;
    }

    if (arr[low] <= arr[mid]) {
      // left is sorted if this condtion met
      if (arr[low] <= target && target <= arr[mid]) {
        // check target is lying & target should be less than arr[mid]
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // right is sorted
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
        high = mid - 1;
      }
    }
  }
  return false;
};
// T.C -> O(log₂N) -> average
// T.C -> O(log(N/2)) (shrink half) -> worst [3, 2, 1, 3, 3, 3, 3] lots of duplicate
console.log(searchElement2([7, 8, 1, 2, 3, 3, 3, 4, 5, 6], 1));

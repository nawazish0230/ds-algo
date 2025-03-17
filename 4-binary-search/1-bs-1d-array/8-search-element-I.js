/*
Search Element in a Rotated Sorted Array [Unique]

Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values) and 
a target value k. Now the array is rotated at some pivot point unknown to you. 
Find the index at which k is present and if k is not present return -1.

Example 1:
Input Format: arr = [4,5,6,7,0,1,2,3], k = 0
Result: 4
Explanation: Here, the target is 0. We can see that 0 is present in the given rotated sorted array, nums. 
Thus, we get output as 4, which is the index at which 0 is present in the array.

Example 2:
Input Format: arr = [4,5,6,7,0,1,2], k = 3
Result: -1
Explanation: Here, the target is 3. Since 3 is not present in the given rotated sorted array. Thus, we get the output as -1.

*/

// 1. Bruteforce | using binary search | done by self
const searchElement1 = (arr, target) => {
  let ans = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) ans = i;
  }
  console.log(ans);
};
// T.C -> O(N)
// searchElement1([4, 5, 6, 7, 0, 1, 2, 3], 0);

const searchElement2 = (arr, target) => {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[low] <= arr[mid]) {
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
  return -1;
};
// T.C -> O(log₂(N))
console.log(searchElement2([4, 5, 6, 7, 0, 1, 2, 3], 0));

/*

Search Insert Position

Problem Statement: You are given a sorted array arr of distinct values and a target value x. You need to search for the index 
of the target value in the array.

If the value is present in the array, then return its index. Otherwise, determine the index where it would be inserted 
in the array while maintaining the sorted order.

Pre-requisite: Lower Bound & Binary Search

Example 1:
Input Format: arr[] = {1,2,4,7}, x = 6
Result: 3
Explanation: 6 is not present in the array. So, if we will insert 6 in the 3rd index(0-based indexing), 
the array will still be sorted. {1,2,4,6,7}.

Example 2:
Input Format: arr[] = {1,2,4,7}, x = 2
Result: 1
Explanation: 2 is present in the array and so we will return its index i.e. 1.

*/

// 1. Bruteforce | using for loop
const searchIndex1 = (arr, x) => {
  let val = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      val = i;
    }
    if (val === arr.length && val && arr[i] > x) {
      console.log(i);
      return;
    }
  }
  console.log(val);
};
// searchIndex1([1, 3, 5, 6], 2);

// 2. Optimal | Using binary search
const searchIndex2 = (arr, target) => {
  let low = 0,
    high = arr.length - 1;
  let ans = arr.length; // this is only change from lower bound

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      high = mid - 1;
      ans = mid;
    } else {
      low = mid + 1;
    }
  }
  console.log(ans)
};

// searchIndex2([1, 3, 5, 6], 0);
searchIndex2([1, 3, 5, 6], 7);

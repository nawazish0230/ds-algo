/*

Count Occurrences in Sorted Array

Problem Statement: You are given a sorted array containing N integers and a number X, 
you have to find the occurrences of X in the given array.

Example 1:
Input: N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
Output : 4
Explanation: 3 is occurring 4 times in the given array so it is our answer.

Example 2:
Input: N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
Output : 5
Explanation: 2 is occurring 5 times in the given array so it is our answer.

*/

// Bruteforce | using for loop | done by self
const countOccurence1 = (arr, x) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      count++;
    }
  }
  console.log(count);
};

// countOccurence1([2, 2, 3, 3, 3, 3, 4], 3);

// Optimal | using binary search same as below one
const firstIndex = (arr, target) => {
  // lower bound code
  let low = 0,
    high = arr.length - 1;

  let ans = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

const lastIndex = (arr, target) => {
  // upper bound code
  const n = arr.length - 1;
  let low = 0,
    high = n;
  let ans = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] <= target) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
};

const countOccurence2 = (arr, target) => {
  const first = firstIndex(arr, target);
  if (first === -1) return 0;
  const last = lastIndex(arr, target);
  console.log(last - first + 1, first, last);
  return last - first + 1;
};

countOccurence2([2, 2, 3, 3, 3, 3, 4], 3);
// countOccurence2([1, 1, 2, 2, 2, 2, 3], 2);
// countOccurence2([1, 1, 2, 2, 2, 2, 3, 4], 4);

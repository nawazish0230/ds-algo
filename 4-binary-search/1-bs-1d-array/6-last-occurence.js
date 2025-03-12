/*
Last occurrence in a sorted array

Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key.
If the target is not found then return -1.

Note: Consider 0 based indexing

Example 1:
Input: N = 7, target=13, array[] = {3,4,13,13,13,20,40}
Output: 4
Explanation: As the target value is 13 , it appears for the first time at index number 2.

Example 2:
Input: N = 7, target=60, array[] = {3,4,13,13,13,20,40}
Output: -1
Explanation: Target value 60 is not present in the array 

*/

// 1. Bruteforce | Using two for loop | done by self
const firstLastOccurence1 = (nums, target) => {
  // this is leetcode version: as first and last occuring index
  const arr = [-1, -1];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      arr[1] = i;
      break;
    }
  }
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === target) {
      arr[0] = i;
      break;
    }
  }
  // console.log(arr);
};

// 2. Bruteforce | Using single for loop
const firstLastOccurence2 = (nums, target) => {
  let first = -1,
    last = -1;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === target) {
      if (first === -1) first = i;
      last = i;
    }
  }
  console.log(first, last);
};
// firstLastOccurence2([3, 4, 13, 13, 13, 20, 40], 13);

// 3. Optimal | Using binary search using (lower & upper bound)
const lowerBound = (arr, target) => {
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

const ub = (arr, target) => {
  let low = 0,
    high = arr.length - 1;

  let ans = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

const firstLastOccurence3 = (arr, target) => {
  const lb = lowerBound(arr, target);
  if (lb === arr.length - 1 || arr[lb] !== target) return [-1, -1];
  return [lb, ub(arr, target) - 1];
};
// T.C -> 2 * O(log2N)
// console.log(firstLastOccurence3([3, 4, 13, 13, 13, 20], 13));

// 4. Optimal using only binary search
const firstOccurence = (arr, target) => {
  let low = 0,
    high = arr.length - 1;

  let first = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      ans = mid;
      high = mid - 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log(first);
  return first;
};

const lastOccurence = (arr, target) => {
  let low = 0,
    high = arr.length - 1;

  let last = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      ans = mid;
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return last;
};

const firstLastOccurence4 = (arr, target) => {
  const first = firstOccurence(arr, target);
  // console.log(first);
  if (first === -1) return [-1, -1];
  const last = lastOccurence(arr, target);
  return [first, last];
};

console.log(firstLastOccurence4([3, 4, 13, 13, 13, 20], 13));

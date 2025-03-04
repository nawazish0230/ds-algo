/*
Problem statement: 
You are given a sorted array of integers and a target, your task is to search for the target in the given array. 
Assume the given array does not contain any duplicate numbers.

Let’s say the given array is = {3, 4, 6, 7, 9, 12, 16, 17} and target = 6.
*/

// 1. Iterative approach
const findByBs1 = (arr, target) => {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};
// T.C -> O(log2N)
// console.log(findByBs1([3, 4, 6, 7, 9, 12, 16, 17], 6));

// 1. Recursive approach
const findByBs2 = (arr, low, high, target) => {
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) return findByBs2(arr, mid + 1, high, target);
  else return findByBs2(arr, low, mid - 1, target);
};

const arr = [3, 4, 6, 7, 9, 12, 16, 17];
console.log(findByBs2(arr, 0, arr.length - 1, 6));

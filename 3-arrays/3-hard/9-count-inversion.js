/*
Count inversions in an array

Problem Statement: Given an array of N integers, count the inversion of the array (using merge-sort).

What is an inversion of an array? Definition: for all i & j < size of array, if i < j then you have to find pair (A[i],A[j]) 
such that A[j] < A[i].

Example 1:
Input Format : N = 5, array[] = {1,2,3,4,5}
Result : 0
Explanation : we have a sorted array and the sorted array has 0 inversions as for i < j you will never find a pair 
such that A[j] < A[i]. More clear example: 2 has index 1 and 5 has index 4 now 1 < 5 but 2 < 5 so this is not an inversion.

Example 2:
Input Format : N = 5, array[] = {5,4,3,2,1}
Result : 10
Explanation : we have a reverse sorted array and we will get the maximum inversions as for i < j 
we will always find a pair such that A[j] < A[i]. Example: 5 has index 0 and 3 has index 2 now 
(5,3) pair is inversion as 0 < 2 and 5 > 3 which will satisfy out conditions and for reverse sorted array 
we will get maximum inversions and that is (n)*(n-1) / 2.For above given array there is 4 + 3 + 2 + 1 = 10 inversions.

Example 3:
Input Format : N = 5, array[] = {5,3,2,1,4}
Result : 7
Explanation : There are 7 pairs (5,1), (5,3), (5,2), (5,4),(3,2), (3,1), (2,1) and we have left 2 pairs (2,4) and (1,4) as both 
are not satisfy our condition. 

*/

// 1. bruteforce | two nested loop | done by self
const countInversion1 = (arr) => {
  // const ans = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        // ans.push([arr[i], arr[j]]);
        count++;
      }
    }
  }

  console.log(count);
};
// T.C -> O(N^2)
// countInversion1([5, 3, 2, 1, 4]);

// 2. Optimal | two merge sort algorithm (REVISIT)
const merge = (arr, low, mid, high) => {
  const temp = [];
  // [low...mid]
  // [mid+1...high]
  let left = low;
  let right = mid + 1;
  let count = 0;
  while (left <= mid && right <= high) {
    // this could by false by any condition met,
    // so if for left element adding another while in botton
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++; // increment the pointer
    } else {
      temp.push(arr[right]);
      count += mid - left + 1;
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // as of now temp have all the new sorted value, so to put value into arr, adding loop
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
  return count;
};

const mergeSort = (arr, low, high) => {
  if (low >= high) return 0;

  const mid = Math.floor((low + high) / 2);
  let count = 0;

  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += merge(arr, low, mid, high);

  return count;
};

const countInversion2 = (arr) => {
  const val = mergeSort(arr, 0, arr.length - 1);
  return val;
};
// T.C -> O(NlogN)
// S.C -> O(N)
countInversion2([5, 3, 2, 1, 4]);

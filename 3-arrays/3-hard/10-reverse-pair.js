/*

Count Reverse Pairs

Problem Statement: Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].

Example 1:
Input: N = 5, array[] = {1,3,2,3,1)
Output : 2 
Explanation: The pairs are (3, 1) and (3, 1) as from both the pairs the condition arr[i] > 2*arr[j] is satisfied.

Example 2:
Input: N = 4, array[] = {3,2,1,4}
Output: 1
Explaination: There is only 1 pair  ( 3 , 1 ) that satisfy the condition arr[i] > 2*arr[j]

*/

// 1. bruteforce

const countReversePairs1 = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j] * 2) count++;
    }
  }
  console.log(count);
};

// countReversePairs1([1, 3, 2, 3, 1]);

// 2. Optimal | two merge sort algorithm (REVISIT)
const merge = (arr, low, mid, high) => {
  const temp = [];
  // [low...mid]
  // [mid+1...high]
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    // this could by false by any condition met,
    // so if for left element adding another while in botton
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++; // increment the pointer
    } else {
      temp.push(arr[right]);
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
};

const countPairs = (arr, low, mid, high) => {
  let right = mid + 1;
  let count = 0;

  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) {
      right++;
    }
    count += (right - (mid + 1));
  }

  return count;
};

const mergeSort = (arr, low, high) => {
  let count = 0;

  if (low >= high) return count;

  const mid = Math.floor((low + high) / 2);

  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += countPairs(arr, low, mid, high);

  merge(arr, low, mid, high);

  return count;
};

const countReversePairs2 = (arr) => {
  const val = mergeSort(arr, 0, arr.length - 1);
  console.log(val);
  return val;
};
// T.C -> O(NlogN)
// S.C -> O(N)
countReversePairs2([1, 3, 2, 3, 1]);

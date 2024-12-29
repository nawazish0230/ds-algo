/*
Topic: Merge Sort Algorithm [https://www.youtube.com/watch?v=ogjf7ORKfd8]

Problem:  Given an array of size n, sort the array using Merge Sort.

Example 1:
Input: N=5, arr[]={4,2,1,6,7}
Output: 1,2,4,6,7,

Example 2:
Input: N=7,arr[]={3,2,8,5,1,4,23}
Output: 1,2,3,4,5,8,23

*/

/*
Approach :-
- It is a *divide and conquers algorithm*, it divides the given array into equal parts and then merges the 2 sorted parts.
- play with index instead of breaking array into multiple array
*/

// REVISIT: for more clarity

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

const mergeSort = (arr, low, high) => {
  if (low >= high) return;
  const mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
};

// Example usage
const arr = [4, 2, 1, 6, 7];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

// T.C -> n -> n/2 -> n/4 ...n/n 
// if we have n/2 then log₂N
// for merging its O(N)
// T.C -> N * log₂N
// S.C -> O(N)

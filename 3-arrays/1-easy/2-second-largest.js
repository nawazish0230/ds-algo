/*

Find Second Smallest and Second Largest Element in an array

Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

Example 1:
Input: [1,2,4,7,7,5]
Output: Second Smallest : 2 Second Largest : 5
Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

Example 2:
Input: [1]
Output: Second Smallest : -1 Second Largest : -1
Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.

*/

// 1. bruteforce approach
const secondLargest1 = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  const largest = sorted[arr.length - 1];
  let secondLargest = 0;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] !== largest) {
      secondLargest = arr[i];
      break;
    }
  }
  return secondLargest;
};
// T.C -> nlogn + O(n)
// console.log(secondLargest1([1, 2, 4, 7, 7, 5]));

// 2. better approach -> find highest and then find second highest by comparing it
const secondLargest2 = (arr) => {
  let largest = -Infinity;
  let smallest = Infinity;
  let secondLargest = -Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    largest = Math.max(arr[i], largest);
    smallest = Math.min(arr[i], smallest);
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > secondLargest && arr[j] !== largest) {
      //basically we are finding highest ignoring the first highest
      secondLargest = arr[j];
    }
    if (arr[j] < secondSmallest && arr[j] !== smallest) {
      secondSmallest = arr[j];
    }
  }
  console.log(secondSmallest, secondLargest);
};

// secondLargest2([1, 2, 4, 7, 5]);

// 3. Best approach
const secondLargest3 = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] <  largest && arr[i] > secondLargest) { // arr[i] !== largest
      secondLargest = arr[i];
    }
  }
  console.log(largest, secondLargest);
};
// T.C -> O(N)
secondLargest3([1, 2, 4, 7, 5]);

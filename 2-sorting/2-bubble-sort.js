/*
Topic: Bubble Sort Algorithm

Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.

Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting we get 9,13,20,24,46,52
Input: N = 5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting we get 1,2,3,4,5

*/

/*
Approach:- [13,46,24,52,20,9]
1. push the max. to the last by adjacent swaps
2. compare with adjacent value and if sorted keep it, otherwise swap it with adjacent value 
- first iteration [13, 24, 46, 20, 9, 52] here max value is pushed to the last
3, we need to keep in mind, outer loop will start from arr.length -> 1
*/

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 1; i--) {
    let didSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        didSwap = true;
      }
    }
    if (!didSwap) break;
  }
  console.log(arr);
};

// bubbleSort([13, 46, 24, 52, 20, 9]);
bubbleSort([13, 14, 20, 30, 40]);

// T.C -> n^2 (worst case)
// T.C -> O(n) (if arr is sorted)

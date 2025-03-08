/*

Topic: Insertion Sort Algorithm

Problem Statement: Given an array of N integers, write a program to implement the Insertion sorting algorithm.


Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: 
After sorting the array is: 9,13,20,24,46,52

Example 2:
Input: N=5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting the array is: 1,2,3,4,5

*/

/*
Approach - [14, 9, 15, 12, 6, 8, 13]
- takes an element and place it in correct order
-  
*/

const insertionSort = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  console.log(arr);
};

insertionSort([14, 9, 15, 12, 6, 8, 13]);

// T.C (worst case) -> n^2
// T.C (best case) -> O(n) (if arr is sorted)

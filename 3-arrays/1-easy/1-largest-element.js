/* 
Q: Find the Largest element in an array

Problem Statement: Given an array, we have to find the largest element in the array.


Example 1:
Input: arr[] = {2,5,1,3,0};
Output: 5
Explanation: 5 is the largest element in the array. 

Example2:
Input: arr[] = {8,10,5,7,9};
Output: 10
Explanation: 10 is the largest element in the array. 

*/

// 1. done by self | Optimized approach
const largestElement = (arr) => {
  let largestNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
};
// T.C -> O(n)
// S.C -> O(n)

// largestElement([2, 5, 1, 3, 0]);

// 2. Second approach - by sorting
const largestElementBySort = (arr) => {
  arr.sort((a, b) => b - a);
  console.log(arr[0]);
};

// T.C -> O(nlogn)
// S.C -> O(1)

largestElementBySort([2, 5, 1, 3, 0]);

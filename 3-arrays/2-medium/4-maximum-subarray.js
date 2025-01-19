/*

Kadane's Algorithm : Maximum Subarray Sum in an Array

Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
has the largest sum and returns its sum and prints the subarray.

Example 1:
Input: arr = [-2,1,-3,4,-1,2,1,-5,4] 
Output: 6 
Explanation: [4,-1,2,1] has the largest sum = 6. 

Examples 2:
Input: arr = [1] 
Output: 1 
Explanation: Array has only one element and which is giving positive sum of 1.

*/

/*
1. Bruteforce approach using 3 nested loop (refer copy)
- first two loops is for iterating over all elements
- third loop help us to find the sum of above loops value
- and that will run fro i -> j to get sum
*/
const maximumSubArray1 = (arr, k) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = 0;
      for (let k = i + 1; k < j; k++) {
        sum += arr[k];
        // if (sum > max) {
        //   max = sum;
        // }
        max = Math.max(sum, max);
      }
    }
  }
  console.log(max);
};
// T.C -> O(N^3)
// S.C -> O(1)

// maximumSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

/*
2. Better approach using 2 nested loop (refer copy)
- first two loops is for iterating over all elements
- so everytime J is increasing and only one more element is added, so we will add one element into exisiting one
*/
const maximumSubArray2 = (arr, k) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      max = Math.max(sum, max);
    }
  }
  console.log(max);
};
// T.C -> O(N^2)
// S.C -> O(1)

// maximumSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

/*
3. Best approach using Kadane's Algorithm (refer copy)
- 2 var, lena hai max & sum
- max ko least least value lena hai
- sum ko add krte jana hai until its > 0
- agr < 0 hogya to reset it to 0
- do not carry negative value
- or jb sum max se bda hojaega to update sum
*/

const maximumSubArray3 = (arr) => {
  let sum = 0,
    max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum < 0) {
      sum = 0;
    }
    console.log(sum);
    max = Math.max(sum, max);
  }

  console.log(max);
};
// maximumSubArray3([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maximumSubArray3([-2, -1]);

/*
4. Best approach using Kadane's Algorithm - follow up question
There might be more than one subarray with the maximum sum. We need to print any of them
- Our approach is to store the starting index and the ending index of the subarray. Thus we can easily get the subarray 
afterward without actually storing the subarray elements.
*/

const maximumSubArray4 = (arr) => {
  let sum = 0,
    max = -Infinity;
  let start = 0;
  let ansStart = -1,
    ansEnd = -1;
  for (let i = 0; i < arr.length; i++) {
    if (sum === 0) start = i;
    sum += arr[i];
    if (sum < 0) {
      sum = 0;
    }
    if (sum > max) {
      max = sum;
      ansStart = start;
      ansEnd = i;
    }
    // max = Math.max(sum, max);
  }

  console.log(max, ansStart, ansEnd);
};
// maximumSubArray4([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// maximumSubArray3([-2, -1]);
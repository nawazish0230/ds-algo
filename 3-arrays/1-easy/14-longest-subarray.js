/*
Longest Subarray with given Sum K(Positives) (REVISIT: for better understanding)

Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray 
that sums to k.

Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

Example 2:
Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
Result: 3
Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.


*/

/*
1. bruteforce -> 
- using 3 nested for loop
- first two loops is for iterating over all elements
- third loop help us to find the sum of above loops value
- inner most loop run from i -> j and find summation
*/
const longestSubarray1 = (arr, k) => {
  let length = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum === k) {
        length = Math.max(length, j - i + 1);
      }
    }
  }
  console.log(length);
};

// T.C -> O(n^3)
// longestSubarray1([2, 3, 5, 1, 9], 10);

/*
2. Better approach using 2 nested loop
- first two loops is for iterating over all elements
- so everytime J is increasing and only one more element is added, so we will add one element into exisiting one
*/
const longestSubarray2 = (arr, k) => {
  let length = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        length = Math.max(length, j - i + 1);
      }
    }
  }
  console.log(length);
};

// T.C -> O(n^2)
// longestSubarray2([2, 3, 5, 1, 9], 10);

/*
3 . better -> (this is optimal in case of positive, zeros & negaitves also)
- using map
- ned to find (k-x)
*/
const longestSubarray3 = (arr, k) => {
  const preSumMap = new Map();
  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    // calculate the prefix sum till index i
    sum += arr[i];

    // if the sum = k, update the maxLen
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    // calculate the sum of remaining part i.e. x - k
    let rem = sum - k;

    // calculate the length and update maxLen
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    // update the map checking the conditions for non-zeros
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }

  console.log(maxLen);
};

// longestSubarray3([1, 2, 3, 1, 1, 1, 1], 3); // refer copy for DRY explaination
// T.C -> O(N) or O(N*logN)

/*
4. Optimal (this is optimal only case of positive and zeros (negative won't work here))
- using two pointer approach
- we need to add and move right until it exceeds k if it exceeds then trim from left and move one to the right (refer copy)

*/

// Topic: Longegst Subarray with given Sum K(Positives)
const longestSubarray4 = (arr, k) => {
  let left = 0, // 2 pointers
    right = 0;
  let sum = arr[0];
  let maxLen = 0;

  while (right < arr.length) {
    // if sum > k, reduce the subarray from left
    // until sum becomes less or equal to k
    while (left <= right && sum > k) {
      sum = sum - arr[left];
      left++;
    }

    // if sum = k, update the maxLen i.e. answer
    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    // Move forward the right pointer
    right++;
    if (right < arr.length) {
      sum += arr[right];
    }
  }
  console.log(maxLen);
};
// T.C  -> O(N+N) = O(2N)
longestSubarray4([1, 2, 3, 1, 1, 1, 1, 3, 3], 6);

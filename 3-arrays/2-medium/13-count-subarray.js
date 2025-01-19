/*
Count Subarray sum Equals K

Problem Statement: Given an array of integers and an integer k, return the total number of 
subarrays whose sum equals k.

A subarray is a contiguous non-empty sequence of elements within an array.

Pre-requisite: Longest subarray with given sum

Example 1:
Input Format: N = 4, array[] = {3, 1, 2, 4}, k = 6
Result: 2
Explanation: The subarrays that sum up to 6 are [3, 1, 2] and [2, 4].

Example 2:
Input Format: N = 3, array[] = {1,2,3}, k = 3
Result: 2
Explanation: The subarrays that sum up to 3 are [1, 2], and [3].

*/

/* 
Bruteforce approach | done by self | take help from maxiumum subarray problem
*/
const countSubarray1 = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let K = i; K <= j; K++) {
        sum += arr[K];
      }
      if (sum === k) {
        count++;
      }
    }
  }
  console.log(count);
};
// countSubarray1([3, 1, 2, 4], 6);
// countSubarray1([1, 1, 1], 2);

/* 
Better approach | done by self | take help from maxiumum subarray problem
*/
const countSubarray2 = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        count++;
      }
    }
  }
  console.log(count);
};

// countSubarray2([3, 1, 2, 4], 6);
// countSubarray2([1, 2, 3], 3);
// countSubarray2([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3);

/*
Optimal Approach | approach known as Prefix sum

*/

const countSubarray3 = (arr, k) => {
  const map = new Map();
  let preSum = 0;
  let cnt = 0;

  // Setting 0 in the map as the initial prefix sum
  map.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    // Add current element to prefix sum
    preSum += arr[i];

    // Calculate preSum - k
    const remove = preSum - k;

    // Check if remove exists in the map
    if (map.has(remove)) {
      cnt += map.get(remove);
    }

    // Update the count of prefix sum in the map
    map.set(preSum, (map.get(preSum) || 0) + 1);
  }
  console.log(cnt);
};
// T.C -> O(N * logN(for using map))
// S.C -> O(N)


countSubarray3([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3);

/*
3 Sum : Find triplets that add up to a zero

Problem Statement: Given an array of N integers, your task is to find unique triplets that 
add up to give a sum of zero. In short, you need to return an array of all the unique triplets 
[arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.

Pre-requisite: 2 Sum Problem

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: Out of all possible unique triplets possible, [-1,-1,2] and [-1,0,1] satisfy the condition 
of summing up to zero with i!=j!=k

Example 2:
Input: nums=[-1,0,1,0]
Output: Output: [[-1,0,1],[-1,1,0]]
Explanation: Out of all possible unique triplets possible, [-1,0,1] and [-1,1,0] satisfy the condition 
of summing up to zero with i!=j!=k

*/

// 1. Bruteforce | using 3 nested loop | doe by self except removing duplicate elements
const sumExists1 = (arr) => {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          const temp = [arr[i], arr[j], arr[k]];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        }
      }
    }
  }

  // removing duplicate elements
  const unique = new Set(ans.map(JSON.stringify));
  ans = Array.from(unique).map(JSON.parse);

  console.log(ans);
};
// sumExists1([-1, 0, 1, 2, -1, -4]);

// 2. Better | half done by self
const sumExists2 = (arr) => {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let hashset = new Set(); // re-initialize for every iteration
    for (let j = i + 1; j < arr.length; j++) {
      const third = -(arr[i] + arr[j]);
      if (hashset.has(third)) {
        let temp = [arr[i], arr[j], third];
        temp.sort((a, b) => a - b);
        ans.push(temp);
      }
      hashset.add(arr[j]);
    }
  }
  const set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  console.log(ans);
};
// T.C -> O(N^2) * logM(using set)
// S.C -> O(N) + O(no. of unique triplet for set)
// sumExists2([-1, 0, 1, 2, -1, -4]);

// 3. Optimal | using two pointer approach
const sumExists3 = (nums) => {
  nums.sort((a, b) => a - b);
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // checking i value should not be same while
    // moving then move forward, it will be used when one iteration completed

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      // j value should not cross k
      const sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        // we found triplet here
        let temp = [nums[i], nums[j], nums[k]];
        ans.push(temp);
        j++; // need to move forward to find more triplet
        k--; // need to go back

        while (j < k && nums[j] === nums[j - 1]) j++; // it shouldn't cross j, curr and prev value shouldn't be same
        while (j < k && nums[k] === nums[k + 1]) k--; // it shouldn't cross j, curr and forward value shouldn't be same
      }
    }
  }
  console.log(ans);
};
// T.C -> nlogn + O(N * N)
// S.C -> nLogN
sumExists3([-1, 0, 1, 2, -1, -4]);
sumExists3([-2, -2, -2, -1, -1, -1, 0, 0, 0, 2, 2, 2]);

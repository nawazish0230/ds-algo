/*
Two Sum : Check if a pair with given sum exists in Array

Problem Statement: Given an array of integers arr[] and an integer target.

1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, 
then nums[1] + nums[1] = target is not a solution.

Example 1:
Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
Result: YES (for 1st variant)
      [1, 3] (for 2nd variant)
Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

Example 2:
Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
Result: NO (for 1st variant)
	[-1, -1] (for 2nd variant)
Explanation: There exist no such two numbers whose sum is equal to the target.

*/

/*
Solution 1: Brute Force Approach (done by self)
- run two nested loop
- in the inner loop, check if the sum of two elements is equal to the target
*/

const sumExists1 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(i, j);
        return [i, j];
      }
    }
  }
};



// sumExists1([2, 6, 5, 8, 11], 14);
// Time Complexity: O(N^2)

/*
2: Better approach - Using hashing
- run for loop and check (i.e. val = target-arr[i]) 
- and check val exists in object or not and
- then store val in obj as key and index as value 
*/

const sumExists2 = (arr, target) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const val = target - arr[i];
    if (obj[val] !== undefined) {
      console.log(obj[val], i);
    }
    obj[arr[i]] = i;
  }
};

// sumExists2([2, 6, 5, 8, 11], 14);
// sumExists2([2, 7, 11, 15], 9);
// sumExists2([3, 2, 4], 6);

// Time Complexity: O(N * logN)
// S.C -> O(N)

/*
3. Optimal Approach - using two pointer (greedy approach);
- sort array first
- use two pointer
- run loop until left cross right
- sum < target increase left index
- sum > target decrease right index
- sum == target - that is our answer
*/

const sumExists3 = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  const sorted = arr.sort((a, b) => a - b);
  while (left < right) {
    const sum = sorted[left] + sorted[right];
    if (sum === target) {
      console.log("YES", sorted[left], sorted[right]);
      return;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  console.log(sorted, arr);
};

sumExists3([2, 6, 5, 8, 11], 14);

// T.C  -> O(N) + O(NlogN)
// S.C -> O(1)

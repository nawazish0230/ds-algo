/*
Find the missing number in an array

Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.

Example 1:
Input Format: N = 5, array[] = {1,2,4,5}
Result: 3
Explanation: In the given array, number 3 is missing. So, 3 is the answer.

Example 2:
Input Format: N = 3, array[] = {1,3}
Result: 2
Explanation: In the given array, number 2 is missing. So, 2 is the answer.

*/

/* 1. bruteforce | done by self
- run loop upto arr.length
- subtract second number with first if difference is more than 1, then missing num is first + 1
*/
const missingNumber1 = (nums) => {
  let num = 0;

  const arr = nums.sort((a, b) => a - b);

  // Check if 0 is missing
  if (arr[0] !== 0) {
    console.log(0);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];
    const second = arr[i + 1];

    if (second - first > 1) {
      num = first + 1;
      break;
    }
  }

  // if no number found, then next occuring number could be missing number
  if (num === 0) {
    num = arr[arr.length - 1] + 1;
  }

  console.log(num);
};

// missingNumber1([3, 0, 1]);

/*
2. bruteforce approach - using two nested loop and flag
- run outer loop upto N, 
- run inner loop to check arr[j] === i, if found change the flag to 1
- if any flag is zero then that number is missing.
*/
const missingNumber2 = (arr, n) => {
  for (let i = 1; i < n; i++) {
    let flag = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) console.log(i);
  }
};
// T.C -> O(m*n)

// missingNumber2([1, 2, 4, 5], 5);

/* 
3. Better Approach - using hashmap/objects
- store the value as key with value 1 in object by running for loop upto arr.length;
- Run another loop to check upto N if there are any key which is having 0 or undefined , i.e the value
*/
const missingNumber3 = (arr, n) => {
  // this is not working at some case [1], [0] etc
  // let val = nums.length;
  // if(nums.length === 1) return 0
  // const hash = new Array(nums.length + 1).fill(0);
  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i]) hash[nums[i]] = 1;
  // }
  // for (let i = 1; i <= nums.length; i++) {
  //     if (hash[i] === 0) {
  //         val = i;
  //     }
  // }
  // return val;

  const n = arr.length;
  const hash = new Array(n + 2).fill(0); // Extra space for 0 and n+1
  // Mark all present numbers (including 0 if it exists)
  for (let num of arr) {
    hash[num] = 1;
  }
  // First check for 0
  if (hash[0] === 0) return 0;
  
  // Then check for numbers from 1 to n+1
  for (let i = 1; i <= n + 1; i++) {
    if (hash[i] === 0) return i;
  }
  // This line should theoretically never be reached
  return -1;
};

// missingNumber3([1, 2, 4, 5], 5);
// T.C -> O(m + n)
// S.C -> O(n)

/*
4. Optimal approach - using sum
- using the formala (sum of first N natural number) -> S = N * (N + 1) / 2
- S - sum of first arr = value
*/

const missingNumber4 = (arr, n) => {
  const sum1 = (n * (n + 1)) / 2;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i];
  }
  console.log(sum1 - sum2);
};

missingNumber4([1, 2, 4, 5], 5);

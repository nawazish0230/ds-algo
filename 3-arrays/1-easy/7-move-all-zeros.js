/*

Move all Zeros to the end of the array

Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the 
array and move non-negative integers to the front by maintaining their order.

Example 1:
Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

Example 2:
Input: 1,2,0,1,0,4,0
Output: 1,2,1,4,0,0,0
Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
*/

// 1.1 bruteforce approach | done by self while revising
const moveAllZeros1 = (arr) => {
  let ans = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      ans.push(arr[i]);
    }
  }

  const tempLength = ans.length;
  for (let i = 0; i < count; i++) {
    ans[tempLength + i] = 0;
  }
  console.log(ans, count);
};


// 1.2 bruteforce approach ->
// - add all non-zeros value to temp
// - then add 0 at last after adding temp value
const moveAllZeros2 = (arr) => {
  const temp = []; //pushing all positive values
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    temp[i] ? (arr[i] = temp[i]) : (arr[i] = 0);
  }
  console.log(arr);
};
// T.C -> O(n) + O(n) = 2*O(n)

// moveAllZeros2([1, 0, 2, 3, 0, 4, 0, 1]);

// 2. optimal solution
// - find j which should be first 0 index
// - run loop and swap value with non-zero values

const moveAllZeros3 = (arr) => {
  if (arr.length === 1) return arr;
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }
  console.log(j);
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0 && j >= 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  console.log(arr, j);
};
// T.C -> O(x) + O(n - x) = O(n)

// moveAllZeros3([1, 0, 2, 3, 0, 4, 0, 1]);
moveAllZeros3([2, 1]);

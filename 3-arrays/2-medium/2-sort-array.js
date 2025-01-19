/*
Sort an array of 0s, 1s and 2s

Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array 
without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)

Input: nums = [2,0,2,1,1,0]
Output : [0,0,1,1,2,2]

Input: nums = [2,0,1]
Output: [0,1,2]

Input: nums = [0]
Output: [0]

*/

// 1. bruteforce | done by self
const sortArray1 = (arr) => {
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr1.unshift(arr[i]);
    } else if (arr[i] === 1) {
      arr1.push(arr[i]);
    } else if (arr[i] === 2) {
      arr2.push(arr[i]);
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    arr[i] = arr1[i];
  }

  let j = 0
  for (let i = arr1.length; i < arr.length; i++) {
    arr[i] = arr2[j];
    j++
  }
  console.log(arr);
  // console.log([...arr1, ...arr2]);
};
// T.C -> O(n) * O(n) = O(n^2)
sortArray1([2, 0, 2, 1, 1, 0]);

// 2. better | approach using in built func. and three variables
const sortArray2 = (arr) => {
  let count0 = 0,
    count1 = 0,
    count2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count0++;
    else if (arr[i] === 1) count1++;
    else if (arr[i] === 2) count2++;
  }

  const sortedArr = [
    ...Array(count0).fill(0),
    ...Array(count1).fill(1),
    ...Array(count2).fill(2),
  ];

  // alternatively we can run 3 for loop upto count0, count1, count2 respectively and modify the arr
  // for(i = 0 -> count0) | for(i = count0.length -> count1) | for(i = count1.length -> count2)

  console.log(sortedArr);
};
// T.C -> O(n)
// sortArray2([2, 0, 2, 1, 1, 0]);

// 3. using Dutch National flag algorithm - (IMP*) (refer copy)
const sortArray3 = (arr) => {
  let low = 0;
  mid = 0;
  high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  console.log(arr);
};
// T.C -> O(n)
// sortArray3([2, 0, 2, 1, 1, 0, 2]);

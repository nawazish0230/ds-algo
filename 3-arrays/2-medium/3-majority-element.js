/*

Find the Majority Element that occurs more than N/2 times

Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times 
in the given array. You may consider that such an element always exists in the array.

Example 1:
Input Format : N = 3, nums[] = {3,2,3}
Result : 3
Explanation : When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 

Example 2:
Input Format: N = 7, nums[] = {2,2,1,1,1,2,2}
Result: 2
Explanation : After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

Example 3:
Input Format: N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}
Result : 4

*/

// 1. bruteforce | using two nested loop | done by self
const majorityElement1 = (arr) => {
  let val = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (element === arr[j]) {
        count++;
      }
    }
    if (count > Math.floor(arr.length / 2)) {
      val = element;
    }
  }
  console.log(val);
};

// majorityElement1([2, 2, 1, 1, 1, 2, 2]);
// T.C -> O(N^2)

/* 2. Better | using hashing | done by self
- save key as array item and value as number of occurence
- run for of loop & check this condition value > Math.floor(arr.length / 2)
- as soon finds the number return it
*/

const majorityElement2 = (arr) => {
  const obj = new Map();
  let val = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (obj.has(num)) {
      obj.set(num, obj.get(num) + 1);
    } else {
      obj.set(num, 1);
    }
    // obj.set(arr[i], (obj.get(arr[i]) || 0) + 1); shorthand of map
  }

  for (const [key, value] of obj) {
    if (value > Math.floor(arr.length / 2)) {
      val = key;
    }
  }
  console.log(obj, val);
};
// T.C -> O(N*logN) (for map data structure) + O(N)
// S.C -> O(N)

// majorityElement2([2, 2, 1, 1, 1, 2, 2]);

/* 
3. Optimal Approach | using Moore's Algorithm (refer copy)
- 
*/

const majorityElement3 = (arr) => {
  let ele = arr[0];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      count = 1;
      ele = arr[i];
    } else if (ele === arr[i]) {
      count++;
    } else {
      count--;
    }
  }
  let val = 0;
  for (let i = 0; i < arr.length; i++) {
    if (ele === arr[i]) val++;
  }

  if (val > Math.floor(arr.length) / 2) {
    console.log(ele);
  }
};

majorityElement3([6, 5, 5]);
// majorityElement3([2, 2, 1, 1, 1, 2, 2]);
// majorityElement3([4, 4, 2, 4, 3, 4, 4, 3, 2, 4]);

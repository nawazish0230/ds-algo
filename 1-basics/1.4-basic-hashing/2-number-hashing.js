/*

Q:1 Find how many times values appears

Input -> [1, 3, 2, 1, 3]

Output -> 
1 -> ?
4 -> ?
2 -> ?
3 -> ?
12 -> ?


---------------

Q:2

Input: 

5
1 3 2 1 3
5
1 4 2 3 12

Output: 

2
0
1
2
0

*/

// for Q:1 using map
const findOccurence1 = (arr) => {
  const obj = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!obj.has(arr[i])) {
      obj.set(arr[i], 1);
    } else {
      obj.set(arr[i], obj.get(arr[i]) + 1);
    }
  }
  console.log(obj);
};
// findOccurence1([1, 3, 2, 1, 3]);

// for Q.1 using object
const findOccurence2 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(obj);
};

// findOccurence2([10, 5, 10, 15, 10, 5]);

// for Q:2
const findOccurenceByNum = (arr, keys) => {
  const obj = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!obj.has(arr[i])) {
      obj.set(arr[i], 1);
    } else {
      obj.set(arr[i], obj.get(arr[i]) + 1);
    }
  }

  const keysObj = new Map();
  for (let j = 0; j < keys.length; j++) {
    if (obj.get(keys[j])) {
      keysObj.set(keys[j], obj.get(keys[j]));
    } else {
      keysObj.set(keys[j], 0);
    }
  }
  console.log(keysObj);
};

findOccurenceByNum([1, 3, 2, 1, 3], [1, 4, 2, 3, 12]);

// Geeksforgeeks problem (https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0)

const findFrequency = (arr) => {
  const obj = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!obj.has(arr[i])) {
      obj.set(arr[i], 1);
    } else {
      obj.set(arr[i], obj.get(arr[i]) + 1);
    }
  }

  const result = [];
  for (let j = 1; j <= arr.length; j++) {
    result.push(obj.get(j) || 0);
  }
  console.log(result);
};

findFrequency([1, 3, 2, 1, 3]);

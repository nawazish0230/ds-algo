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

// for Q:1
const findOccurence = (arr) => {
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

// findOccurence([1, 3, 2, 1, 3]);
findOccurence([10, 5, 10, 15, 10, 5]);


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

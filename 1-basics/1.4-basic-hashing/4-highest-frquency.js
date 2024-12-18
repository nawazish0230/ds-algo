/*
Q: Find the highest/lowest frequency element

Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

Example 1:
Input: array[] = {10,5,10,15,10,5};
Output: 10 15
Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.

Example 2:
Input: array[] = {2,2,3,4,4,2};
Output: 2 3
Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.

*/

// 1. bruteforce method
const highLowFrequency1 = (arr) => {
  const n = arr.length;
  const visited = new Array(n).fill(false);

  let minFreq = n, // REVIST: didn't understood
    maxFreq = 0;
  let minEle = 0,
    maxEle = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue; // REVIST

    let count = 1;

    for (let j = i + 1; j < n; j++) {
      if (arr[i] == arr[j]) {
        visited[j] = true; // REVIST
        count++;
      }
    }
    if (count > maxFreq) {
      maxFreq = count;
      maxEle = arr[i];
    }
    if (count < minFreq) {
      minFreq = count;
      minEle = arr[i];
    }
  }
  console.log(visited, maxEle, minEle);
};

// highLowFrequency1([5, 10, 15, 10, 10, 5]);

// 2. Optimized way
const highLowFrequency2 = (arr) => {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }

  let maxFreq = 0,
    minFreq = arr.length;
  let maxEle = 0,
    minEle = 0;

  for (let element in map) {
    const count = map[element];
    
    if (count > maxFreq) {
      maxEle = element;
      maxFreq = count;
    }

    if (count < minFreq) {
      minEle = element;
      minFreq = count;
    }
  }

  console.log("The highest frequency element is:", maxEle);
  console.log("The lowest frequency element is:", minEle);
};
highLowFrequency2([5, 10, 15, 10, 10, 5]);

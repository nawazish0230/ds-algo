/*

Search Single Element in a sorted array

Problem Statement: Given an array of N integers. Every number in the array except one appears twice. 
Find the single number in the array.

Example 1:
Input Format: arr[] = {1,1,2,2,3,3,4,5,5,6,6}
Result: 4
Explanation: Only the number 4 appears once in the array.

Example 2:
Input Format: arr[] = {1,1,3,5,5}
Result: 3
Explanation: Only the number 3 appears once in the array.

*/

// Bruteforce | using single loop
const singleElement1 = (arr) => {
  const n = arr.length;

  if (n === 1) return arr[0]; // one element in array

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      // check for 1st index
      if (arr[i] !== arr[i + 1]) return arr[i];
    } else if (i === n - 1) {
      if (arr[i] !== arr[n - 1]) return arr[i];
    } else {
      if (arr[i - 1] !== arr[i] && arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
  }
  return -1;
};
// T.C -> O(n)
// console.log(singleElement1([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]));

const singleElement2 = (arr) => {
  const n = arr.length;

  if (n === 1) return arr[0]; // one element in array
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 1,
    high = n - 2;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
      return arr[mid]; // we got item
    }
    if (
      (mid % 2 === 1 && arr[mid] === arr[mid - 1]) ||
      (mid % 2 === 0 && arr[mid] === arr[mid + 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};

// T.C -> O(logN)
console.log(singleElement2([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]));

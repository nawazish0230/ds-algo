/*

Union of Two Sorted Arrays

Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

The union of two arrays can be defined as the common and distinct elements in the two arrays.
NOTE: Elements in the union should be in ascending order.

Example 1:
Input: n = 5,m = 5.
arr1[] = {1,2,3,4,5}  
arr2[] = {2,3,4,4,5}
Output: {1,2,3,4,5}

Explanation: 
Common Elements in arr1 and arr2  are:  2,3,4,5
Distinct Elements in arr1 are : 1
Distinct Elemennts in arr2 are : No distinct elements.
Union of arr1 and arr2 is {1,2,3,4,5} 

Example 2:
Input:n = 10,m = 7.
arr1[] = {1,2,3,4,5,6,7,8,9,10}
arr2[] = {2,3,4,4,5,11,12}
Output: {1,2,3,4,5,6,7,8,9,10,11,12}
Explanation:
Common Elements in arr1 and arr2  are:  2,3,4,5
Distinct Elements in arr1 are : 1,6,7,8,9,10
Distinct Elemennts in arr2 are : 11,12
Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12}

*/

// 1. bruteforce method
const unionArrays1 = (arr1, arr2) => {
  // const arr = [];
  const set = new Set();
  for (let i = 0; i < arr1.length; i++) {
    // if (!arr.includes(arr1[i])) {
    // arr.push(arr1[i]);
    // }
    set.add(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    // if (!arr.includes(arr2[j])) {
    //   arr.push(arr2[j]);
    // }
    set.add(arr2[j]);
  }
  console.log(set);
};

// unionArrays1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]);

// 2. optimized way
const unionArrays2 = (arr1, arr2) => {
  const n1 = arr1.length;
  const n2 = arr2.length;
  let i = 0;
  let j = 0;
  const unionArr = [];

  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr1[i]) {
        unionArr.push(arr1[i]);
      }
      i++;
    } else {
      if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr2[j]) {
        unionArr.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < n1) {
    if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr1[i]) {
      unionArr.push(arr1[i]);
    }
    i++;
  }
  while (j < n2) {
    if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr2[j]) {
      unionArr.push(arr2[j]);
    }
    j++;
  }

  console.log(unionArr);
};
unionArrays2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]);

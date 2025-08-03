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

// 1. bruteforce method | using set data structure
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
  const unionArray = Array.from(set).sort((a, b) => a - b);

  console.log(unionArray);
};
// T.C -> O(n1logn + n2logn) + O(n1 + n2)
// S.C -> O(n1 + m1)
// unionArrays1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]);

// 2. optimized way | two pointer approach
const unionArrays2 = (arr1, arr2) => {
  const n1 = arr1.length;
  const n2 = arr2.length;
  let i = 0;
  let j = 0;
  const ans = [];
  const ansLast = ans.length - 1;

  // this will run until n1 and n2 have some value, and exited when anyone have exhausted
  // so, we need to pick other arr if one is exhasuted for that we are handling in bottom
  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      if (ans.length === 0 || ans[ansLast] !== arr1[i]) {
        // 1st -> if this is first time take the value
        // 2nd -> checking particular element is already in ans or not then take it
        ans.push(arr1[i]);
      }
      i++; // irrespective of we take it or not we will move
    } else {
      if (ans.length === 0 || ans[ansLast] !== arr2[j]) {
        ans.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < n1) {
    // If any elements left in arr1
    if (ans.length === 0 || ans[ansLast] !== arr1[i]) {
      ans.push(arr1[i]);
    }
    i++;
  }
  while (j < n2) {
    // If any elements left in arr2
    if (ans.length === 0 || ans[ansLast] !== arr2[j]) {
      ans.push(arr2[j]);
    }
    j++;
  }

  console.log(ans);
};
unionArrays2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]);

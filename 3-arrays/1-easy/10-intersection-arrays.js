// not mentioned in sheet, from video

/*
Intersection of Two Sorted Arrays

Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the intersection of two sorted arrays.

The union of two arrays can be defined as the common and distinct elements in the two arrays.
NOTE: Elements in the union should be in ascending order.

Example 1:
Input: n = 5,m = 5.
arr1[] = {1,2,3,4,5}  
arr2[] = {2,3,4,4,5}
Output: {2, 3, 4, 5}

Explanation: 
Common Elements in arr1 and arr2  are:  2,3,4,5
Intersection of arr1 and arr2 is 2,3,4,5} 

Example 1:
Input: n = 5,m = 5.
arr1[] = {1,2,2,3,3,4,4,5,6}  
arr2[] = {2,3,3,5,6,6,7}
Output: {2,3,3,5,6}

Explanation: 
Common Elements in arr1 and arr2  are:  2,3,3,5,6
Intersection of arr1 and arr2 is 2,3,4,5} 


*/

// 1. Bruteforce approach
const intersectionArrays1 = (arr1, arr2) => {
  const n1 = arr1.length;
  const n2 = arr2.length;

  const visited = new Array(n2).fill(0);
  const arr = [];
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (arr1[i] === arr2[j] && visited[j] === 0) {
        //value should be same && its not visited
        arr.push(arr1[i]);
        visited[j] = 1;
        break;
      }
      if (arr2[j] > arr1[i]) break; // if arr2 value is greater then no need to go forward
    }
  }
  console.log(arr);
};

// intersectionArrays1([1, 2, 2, 3, 3, 4, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7]);

// T.C -> n1*n2
// S.C -> 2n

// optimal way using two pointers
const intersectionArrays2 = (arr1, arr2) => {
  const n = arr1.length;
  const m = arr2.length;
  let i = 0;
  let j = 0;
  const arr = [];

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      arr.push(arr1[i]);
      i++;
      j++;
    }
  }
  console.log(arr);
};
// T.C -> O(m + n)
// S.C -> O(1)

intersectionArrays2([1, 2, 2, 3, 3, 4, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7]);



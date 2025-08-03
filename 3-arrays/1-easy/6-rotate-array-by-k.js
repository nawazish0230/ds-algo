/*

Rotate array by K elements

Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

Example 1:
Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
Output: 6 7 1 2 3 4 5
Explanation: array is rotated to right by 2 position .

Example 2:
Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
Output: 9 10 11 3 7 8
Explanation: Array is rotated to right by 3 position.

*/

// 1. bruteforce | done by self
// [1, 2, 3, 4, 5, 6, 7], 3
const rotateArrayByK1 = (arr, k) => {
  let ans = [];

  // storing [6, 7] at initial index
  for (let i = arr.length - k; i < arr.length; i++) {
    ans[i - (arr.length - k)] = arr[i];
  }

  // storing [1, 2, 3, 4, 5] after [6, 7] from k+i index
  for (let i = 0; i < arr.length - k; i++) {
    ans[i + k] = arr[i];
  }

  // putting back to arr
  for (let i = 0; i < ans.length; i++) {
    arr[i] = ans[i];
  }
  console.log(arr);
};

// 1. bruteforce | done by self
const rotateArrayByK = (arr, k) => {
  k = k % arr.length; // if we do rotation same as array length it will come to same place,
  // if its more than that 2 hen only 2 place rotation needed
  const tempMain = [];
  const temp = [];

  // storing in temp
  for (let i = arr.length - k; i < arr.length; i++) {
    temp.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (i < k) {
      tempMain.push(temp[i]); // putting temp value
    } else {
      tempMain.push(arr[i - k]); // putting value except temp
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = tempMain[i];
  }
  console.log(arr);
};
// rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 3);

// 2. Bruteforce | better than above implmentation
const rotateArrayK2 = (arr, k) => {
  const n = arr.length;
  k = k % n; // Handle cases where k > n

  const temp = [];
  // storing in temp
  for (let i = 0; i < k; i++) {
    temp[i] = arr[i];
  }

  // putting value except temp
  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }

  // putting temp value
  for (let i = n - k; i < n; i++) {
    arr[i] = temp[i - (n - k)];
  }
  console.log(arr);
};

// rotateArrayK2([1, 2, 3, 4, 5, 6, 7], 3);
// T.C -> O(n) + O(n-k) + O(N)
// S.C -> O(n)

// 3. optimized approach | without extra space
// - reverse a , a + k
// - reverse a + k , a + k
// - reverse a, a + n
const rotateArrayByK3 = (arr, k) => {
  const reverseToK = arr.slice(0, k).reverse();
  const reverseKtoN = arr.slice(k).reverse();
  const merged = reverseToK.concat(reverseKtoN);
  const final = merged.reverse();
  console.log(final);
};

rotateArrayByK3([1, 2, 3, 4, 5, 6, 7], 3);

// T.C -> O(n)
// S.C -> O(1)

/*

Left Rotate the Array by One

Problem Statement: Given an array of N integers, left rotate the array by one place.

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: 2,3,4,5,1
Explanation: Since all the elements in array will be shifted toward left by one so ‘2’ will now become the  first index and 
and ‘1’ which was present at first index will be shifted at last.

Example 2:
Input: N = 1, array[] = {3}
Output: 3
Explanation: Here only element is present and so the element at first index will be shifted to  last index which is 
also by the way the first index.

*/

// 2. Bruteforce | using single along with extra space
const leftRotate1 = (arr) => {
  let ans = [];
  for (let i = 1; i < arr.length; i++) {
    ans[i - 1] = arr[i];
  }
  ans.push(arr[0]);
  for (let i = 0; i < ans.length; i++) {
    arr[i] = ans[i];
  }
  console.log(arr);
};
// T.C -> O(N)
// S.C -> O(N)
// rotateArray1([1, 2, 3, 4, 5]);

// 2. optimal approach | using single loop without extra space
const rotateArray2 = (arr) => {
  const firstItem = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  // for (let i = 1; i < arr.length; i++) {
  //   arr[i - 1] = arr[i];
  // }
  arr[arr.length - 1] = firstItem;
  console.log(arr);
};
// T.C -> O(N)
// S.C -> O(1)
// rotateArray2([1, 2, 3, 4, 5]);

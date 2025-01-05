/*

Remove Duplicates in-place from Sorted Array

Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique 
element appears only once. The relative order of the elements should be kept the same.

If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. 
It does not matter what you leave beyond the first k elements.

Note: Return k after placing the final result in the first k slots of the array.

Example 1:
Input: arr[1,1,2,2,2,3,3]
Output: arr[1,2,3,_,_,_,_]
Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.

Example 2:
Input: arr[1,1,1,2,2,3,3,3,3,4,4]
Output: arr[1,2,3,4,_,_,_,_,_,_,_]
Explanation: Total number of unique elements are 4, i.e[1,2,3,4] and Therefore return 4 after assigning [1,2,3,4] in the beginning of the array.


*/

// 1. bruteforce approach (done by self)
const removeDuplicates = (arr) => {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (!temp.includes(arr[i])) {
      temp.push(arr[i]);
    }
  }
  console.log(temp);
};
// T.C -> O(n×k) | n(loop), k(includes) 
// T.C -> O(n×n) | worst case if k is unique

// removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4]);

// 2. bruteforce way - using set
const removeDuplicates2 = (arr) => {
  let set = new Set(arr);
  let uniqueArr = Array.from(set);
  for (let i = 0; i < uniqueArr.length; i++) {
    arr[i] = uniqueArr[i];
  }
  console.log(arr, uniqueArr);
};
// removeDuplicates2([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4]);

// 3. optimal approach - two pointer approach
const removeDuplicates3 = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  console.log(i + 1);
};

removeDuplicates3([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4]);

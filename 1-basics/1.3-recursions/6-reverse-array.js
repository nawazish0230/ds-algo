/*
Q: Reverse a given Array

Problem Statement: You are given an array. The task is to reverse the array and print it. 

Examples:

Example 1:
Input: N = 5, arr[] = {5,4,3,2,1}
Output: {1,2,3,4,5}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, 
the second element occupies the fourth position and so on.

Example 2:
Input: N=6 arr[] = {10,20,30,40}
Output: {40,30,20,10}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, 
the second element occupies the fourth position and so on.

*/

// 1. using one variable
const newArr = [];
const reverseArray1 = (n) => {
  const nLength = n.length;
  if (newArr.length === nLength) {
    console.log(newArr);
    return;
  }
  newArr.push(n[nLength - 1 - newArr.length]);
  reverseArray1(n);
};

// reverseArray1([5, 4, 3, 2, 1]);
// T.C -> O(n)
// S.C -> O(n)

// 2. reverse without parametrized variable (using 2 pointers )
const reverseArray2 = (n, l, r) => {
  if (l >= r) {
    console.log(n);
    return;
  }
  // const temp = n[l];
  // n[l] = n[r];
  // n[r] = temp;
  [n[l], n[r]] = [n[r], n[l]];
  reverseArray2(n, l + 1, r - 1);
};

// reverseArray2([5, 4, 3, 2, 1], 0, 4);

// 2. reverse without single variable (using 1 pointers )
const reverseArray3 = (arr, i) => {
  const arrLength = arr.length;
  if (i > arrLength / 2) {
    console.log(arr);
    return;
  }
  [arr[i], arr[arrLength - i - 1]] = [arr[arrLength - i - 1], arr[i]];
  reverseArray3(arr, i + 1);
};

reverseArray3([5, 4, 3, 2, 1], 0);

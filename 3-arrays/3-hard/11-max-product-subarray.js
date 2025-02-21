/*
Maximum Product Subarray in an Array

Problem Statement: Given an array that contains both negative and positive integers, find the maximum product subarray.

Example 1:
Input: Nums = [1,2,3,4,5,0]
Output: 120
Explanation:In the given array, we can see 1×2×3×4×5 gives maximum product value.

Example 2:
Input: Nums = [1,2,-3,0,-4,-5]
Output: 20
Explanation: In the given array, we can see (-4)×(-5) gives maximum product value.

*/

// 1. bruteforce
const maxProductSubarr1 = (arr) => {
  let val = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let prod = 1;
      for (let k = i; k <= j; k++) {
        // i se lekrke j tk ke value...
        prod *= arr[k];
      }
      val = Math.max(val, prod);
    }
  }
  console.log(val);
};

// maxProductSubarr1([2, 3, -2, 4]);

// 2. Better
const maxProductSubarr2 = (arr) => {
  let result = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let p = 1;
    for (let j = i; j < arr.length; j++) {
      p *= arr[j];
      result = Math.max(result, p);
    }
  }
  console.log(result);
};

// maxProductSubarr2([2, 3, -2, 4]);

// 2. Optimal
const maxProductSubarr3 = (arr) => {
  let pre = 1,
    suf = 1;

  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (pre === 0) pre = 1;
    if (suf === 0) suf = 1;

    pre = pre * arr[i];
    suf = suf * arr[arr.length - i - 1];

    max = Math.max(max, Math.max(pre, suf));
  }
  console.log(max);
};

maxProductSubarr3([2, 3, -2, 4]);

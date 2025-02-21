/*
Merge two Sorted Arrays Without Extra Space

Problem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. 
Merge them in sorted order. Modify arr1 so that it contains the first N elements and modify arr2 
so that it contains the last M elements.

Example 1:
Input:
n = 4, arr1[] = [1 4 8 10] 
m = 5, arr2[] = [2 3 9]

Output:
arr1[] = [1 2 3 4]
arr2[] = [8 9 10]

Explanation:
After merging the two non-decreasing arrays, we get, 1,2,3,4,8,9,10.

Example2:
Input:
n = 4, arr1[] = [1 3 5 7] 
m = 5, arr2[] = [0 2 6 8 9]

Output:
arr1[] = [0 1 2 3]
arr2[] = [5 6 7 8 9]

Explanation:
After merging the two non-decreasing arrays, we get, 0 1 2 3 5 6 7 8 9.

*/

// 1. bruteforce | using two pointers and taking extra space as well
const mergeArr1 = (arr1, arr2) => {
  const arr = [];
  const n = arr1.length,
    m = arr2.length;
  let left = 0,
    right = 0;
  let index = 0;

  while (left < n && right < m) {
    if (arr1[left] <= arr2[right]) {
      arr[index] = arr1[left];
      left++, index++;
    } else {
      arr[index] = arr2[right];
      right++, index++;
    }
  }

  // if some element left at left
  while (left < n) {
    arr[index] = arr1[left];
    left++, index++;
  }

  // if some element left at right
  while (right < m) {
    arr[index] = arr2[right];
    right++, index++;
  }

  // putting back value from arr to arr1 & arr2
  for (let i = 0; i < m + n; i++) {
    if (i < n) arr1[i] = arr[i];
    else arr2[i - n] = arr[i]; // yha pe arr1 complete hogya hai, to i-n krne se arr2 ke 0 index se start hoga
  }

  console.log(arr1, arr2);
};

// T.C -> O(n+m) +O(n+m)
// S.C -> O(n+m)

// mergeArr1([1, 2, 3], [2, 5, 6]);

// 2. optimal | using two pointers and then sorting it
const mergeArr2 = (arr1, arr2) => {
  const n = arr1.length,
    m = arr2.length;
  let left = n - 1;
  let right = 0;

  while (left >= 0 && right < m) {
    if (arr1[left] > arr2[right]) {
      [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
      left--, right++;
    } else {
      break;
    }
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  console.log(arr1, arr2);
};

// T.C -> O(min(m + n)) + O(nlogn) + O(mlogm)
// S.C -> O(1)

// mergeArr2([1, 3, 5, 7], [0, 2, 6, 8, 9]);

// 3. optimal | using gap method | shell sorting

const swapIfGreater = (arr1, arr2, indx1, indx2) => {
  if (arr1[indx1] > arr2[indx2]) {
    [arr1[indx1], arr2[indx2]] = [arr2[indx2], arr1[indx1]];
  }
};

const mergeArr3 = (arr1, arr2) => {
  const n = arr1.length,
    m = arr2.length;
  let length = n + m;
  let gap = Math.ceil(length / 2);

  while (gap > 0) {
    let left = 0;
    let right = left + gap;

    // right cross boundary
    while (right < length) {
      // when left is in arr1 & right is in arr2
      if (left < n && right >= n) {
        // condition -> left < m && right < m
        swapIfGreater(arr1, arr2, left, right - n); // as indx2 is in arr2, so to get exact index = right - n
      } else if (left >= n) {
        // condition -> left < m && right >= m
        // both are at arr2 as right will always be right of it
        swapIfGreater(arr1, arr2, left - n, right - n);
      } else {
        // when left is in arr1 & right is also in arr1
        swapIfGreater(arr1, arr2, left, right);
      }
      left++, right++;
    }
    if (gap == 1) break;

    gap = Math.ceil(gap / 2);
  }

  console.log(arr1, arr2);
};

// T.C -> log2(n + m) * O(m + n)
// S.C -> O(1)

mergeArr3([1, 3, 5, 7], [0, 2, 6, 8, 9]);

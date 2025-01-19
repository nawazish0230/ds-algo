/*
Rearrange Array Elements by Sign

Variety -1 : There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order 
of positive and negative elements, you must return an array of alternately positive and negative values.

Note: Start the array with positive elements.

Example 1:
Input: arr[] = {1,2,-4,-5}, N = 4
Output: 1 -4 2 -5
Explanation: 
Positive elements = 1,2
Negative elements = -4,-5
To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.

Example 2:
Input: arr[] = {1,2,-3,-1,-2, 3}, N = 6
Output: 1 -3 2 -1 3 -2
Explanation: 
Positive elements = 1,2,3
Negative elements = -3,-1,-2
To maintain relative ordering, 1 must occur before 2, and 2 must occur before 3.
Also, -3 should come before -1, and -1 should come before -2.

*/

/*
1. Bruteforce approach (refer copy)
- run loop to segregate positive & negative numbers
- run another loop upto n/2 and for odd place put positive num & for even place put negative num

*/

const rearrangeArray1 = (arr) => {
  const pos = [];
  const neg = [];
  for (let i = 0; i < arr.length; i++) {
    const ele1 = arr[i];
    if (ele1 > 0) {
      pos.push(ele1);
    } else {
      neg.push(ele1);
    }
  }

  for (let i = 0; i < arr.length / 2; i++) {
    arr[2 * i] = pos[i];
    arr[2 * i + 1] = neg[i];
  }
  console.log(arr);
};
// rearrangeArray1([1, 2, -3, -1, -2, 3]);

/*
2. Optimal approach (refer copy)
- take two vairable posIndex = 0 & negIndex = 1
- run loop and 
  - if value is negative put value into negative index ansArr[negIndex] & increment +2
  - if value is positive put value into positive index ansArr[posIndex] & increment +2
*/

const rearrangeArray2 = (arr) => {
  const ans = [];
  let posIndex = 0,
    negIndex = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      ans[negIndex] = arr[i];
      negIndex += 2;
    } else {
      ans[posIndex] = arr[i];
      posIndex += 2;
    }
  }
  console.log(ans);
};
// T.C -> O(N) + O(N)
// S.C -> O(N)
// rearrangeArray2([1, 2, -3, -1, -2, 3]);

/*
Variety-2

There’s an array ‘A’ of size ‘N’ with positive and negative elements (not necessarily equal). Without altering the 
relative order of positive and negative elements, you must return an array of alternately positive and negative values. 
The leftover elements should be placed at the very end in the same order as in array A.

Note: Start the array with positive elements.


Example 1:
Input: arr[] = {1,2,-4,-5,3,4}, N = 6
Output: 1 -4 2 -5 3 4
Explanation: 
Positive elements = 1,2
Negative elements = -4,-5
To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.
Leftover positive elements are 3 and 4 which are then placed at the end of the array.


Example 2:
Input: arr[] = {1,2,-3,-1,-2,-3}, N = 6
Output: 1 -3 2 -1 3 -2
Explanation: 
Positive elements = 1,2
Negative elements = -3,-1,-2,-4
To maintain relative ordering, 1 must occur before 2.
Also, -3 should come before -1, and -1 should come before -2.
After alternate ordering, -2 and -4 are left, which would be placed at the end of the ans array.

*/

/*
bruteforce approach
*/

const rearrangeArray3 = (arr) => {
  const pos = [];
  const neg = [];
  for (let i = 0; i < arr.length; i++) {
    const ele1 = arr[i];
    if (ele1 > 0) {
      pos.push(ele1);
    } else {
      neg.push(ele1);
    }
  }

  console.log(pos, neg);

  if (neg.length > pos.length) {
    for (let i = 0; i < pos.length; i++) {
      arr[i * 2] = pos[i];
      arr[i * 2 + 1] = neg[i];
    }

    // to fill extra left neg values at the end of array
    let index = pos.length * 2;
    for (let i = pos.length; i < neg.length; i++) {
      arr[index] = neg[i];
      index++;
    }
  } else {
    for (let i = 0; i < neg.length; i++) {
      arr[i * 2] = pos[i];
      arr[i * 2 + 1] = neg[i];
    }

    // to fill extra left neg values at the end of array
    let index = neg.length * 2;
    for (let i = neg.length; i < pos.length; i++) {
      arr[index] = pos[i];
      index++;
    }
  }

  console.log(arr);
};

// T.C -> O(N) + (O(min(pos, neg)) + O(leftover) => O(N)) -> O(2N)
rearrangeArray3([1, 2, -4, -5, 3, 4]);

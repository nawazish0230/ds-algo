/*
Find the number that appears once, and the other numbers twice

Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

Example 1:
Input Format: arr[] = {2,2,1}
Result: 1
Explanation: In this array, only the element 1 appear once and so it is the answer.

Example 2:
Input Format: arr[] = {4,1,2,1,2}
Result: 4
Explanation: In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer.

*/

/*
1. Bruteforce Approach - nested array
- run outer first loop
- run inner second loop 
- create count variable and match arr[i] === arr[j]
- return if arr[i] if count is 1
*/

const numberAppearsOnce1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count === 1) {
      console.log(arr[i]);
      return arr[i];
    }
  }
};
// T.C -> O(N^2)
// S.C -> O(1)

// numberAppearsOnce1([1, 2, 4, 1, 2]);

/*
2. better -> Hashing 
- take one obj as empty object
- run loop and add key as value and update count based on count of value result in { '1': 2, '2': 2, '4': 1 }
- run for in loop and find occ. of 1 and run that key here it is "4"
*/
const numberAppearsOnce2 = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    // if (obj[arr[i]]) {
    //   obj[arr[i]]++;
    // } else {
    //   obj[arr[i]] = 1;
    // }
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  for (const ele in obj) {
    if (obj[ele] === 1) {
      console.log(ele);
    }
  }
};
// T.C -> O2(N)
// S.C -> O(N)

// numberAppearsOnce2([1, 2, 4, 1, 2]);

/*
3. Optimal approach - using XOR
*/

const numberAppearsOnce3 = (arr) => {
  let xorr = 0;
  for (let i = 0; i < arr.length; i++) {
    xorr = xorr ^ arr[i];
  }
  console.log(xorr);
};
numberAppearsOnce3([1, 2, 4, 1, 2]);

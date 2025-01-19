/*
Longest Consecutive Sequence in an Array

Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

Example 1:
Input: [100, 200, 1, 3, 2, 4]
Output: 4
Explanation: The longest consecutive subsequence is 1, 2, 3, and 4.

Example 2:
Input: [3, 8, 5, 7, 6]
Output: 4
Explanation: The longest consecutive subsequence is 5, 6, 7, and 8.

*/

/*
1. Better | done by self
- pehle array ko sort krdena hai
- count ko by default 1 rkhna hai
- current - ek aage wale ko minus krne pe agr -1 aya to count bdha dena hai (arr[i] - arr[i + 1] === -1) count++;)
- agr condition match ne kia to reset count to 1
- and count > longest true hai to longest = count 
*/
const longestConsecutive1 = (arr) => {
  arr.sort((a, b) => a - b);
  let count = 1,
    longest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - arr[i + 1] === -1) {
      count++;
    } else {
      // if (count > longest) longest = count;
      count = 1;
    }
    longest = Math.max(count, longest);
  }
  console.log(longest);
};
// T.C -> N(LogN) + O(N)

// longestConsecutive1([100, 200, 1, 3, 2, 4]);
// longestConsecutive1([102, 4, 100, 101, 3, 2, 1, 1]);
// longestConsecutive1([5, 8, 3, 2, 1, 4]);

/*
2. Bruteforce 
- pick an element and search for its consecutive numbers:
- search for consecutive numbers using linear search:
*/

function linearSearch(arr, num) {
  let n = arr.length; // size of array
  for (let i = 0; i < n; i++) {
    if (arr[i] === num) return true;
  }
  return false;
}

const longestConsecutive2 = (arr) => {
  let n = arr.length; // size of array
  let longest = 1;
  // pick an element and search for its consecutive numbers:
  for (let i = 0; i < n; i++) {
    let ele = arr[i];
    let cnt = 1;
    // search for consecutive numbers using linear search:
    while (linearSearch(arr, ele + 1) === true) {
      ele += 1;
      cnt += 1;
    }

    longest = Math.max(longest, cnt);
  }
  console.log(longest);
  return longest;
};

// longestConsecutive2([102, 4, 100, 101, 3, 2, 1, 1]);
// longestConsecutive2([5, 8, 3, 2, 1, 4]);

/*
3. Better | almost similar to 1st approach
- 
*/

const longestConsecutive3 = (arr) => {
  arr.sort((a, b) => a - b);
  let lastSmaller = -Infinity;
  let count = 0,
    longest = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 1 === lastSmaller) {
      // arr[i] is the next element of the current sequence.
      count++;
      lastSmaller = arr[i];
    } else if (arr[i] !== lastSmaller) {
      count = 1;
      lastSmaller = arr[i];
    }
    longest = Math.max(count, longest);
  }
  console.log(longest);
};
// T.C -> O(NlogN) + O(N),
// longestConsecutive3([5, 8, 3, 2, 1, 4]);


/*
4. Optimal Approach ([5, 8, 3, 2, 1, 1, 4])
- pehle value ko obj me store krlenge
- for of lga check krenge prev value exist krta hai y ne | ex. 5 -> 4 , 8 -> 7
- agr exist krega to kch kch ne krenge 
- agr prev exist ne krta hai iska mtlb ye sbse smallest value hai so we can start incrementing count
- while me check krrhe hai | 1 hai then +1=2 hai -> +1=3 hai -> +1=4 hai -> +1=5 hai | count = 5 & update longest also
- while loop fully ne chlrha hai because of condition wo max 2N tk jaega islie complexity N^2 ne hoga
*/
const longestConsecutive4 = (arr) => {
  let longest = 1;
  const obj = new Set(); // same can be achived by obj

  for (let i = 0; i < arr.length; i++) {
    obj.add(arr[i]);
  }

  for (const ele of obj) {
    const prev = obj.has(ele - 1);
    if (!prev) {
      let count = 1;
      let val = ele;
      while (obj.has(val + 1)) { // adding in current value and going forward
        val = val + 1;
        count = count + 1;
      }
      longest = Math.max(count, longest);
    }
  }
  console.log(longest);
};
// T.C -> O(N) + O(2*N) ~ O(3*N),
longestConsecutive4([5, 8, 3, 2, 1, 1, 4]);

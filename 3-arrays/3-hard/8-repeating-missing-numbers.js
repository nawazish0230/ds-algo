/*
Find the repeating and missing numbers

Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. 
Each integer appears exactly once except A which appears twice and B which is missing. 
The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.

Example 1:
Input Format : array[] = {3,1,2,5,3}
Result : {3,4)
Explanation : A = 3 , B = 4 
Since 3 is appearing twice and 4 is missing

Example 2:
Input Format : array[] = {3,1,2,5,4,6,7,5}
Result : {5,8)
Explanation : A = 5 , B = 8 
Since 5 is appearing twice and 8 is missing

*/

// 1. bruteforce | using two nested loop
const findRepeatingMissing1 = (arr) => {
  let repeating = null;
  let missing = null;

  for (let i = 1; i <= arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) count++;
    }

    if (count === 2) repeating = i;
    else if (count === 0) missing = i;

    if (repeating !== null && missing !== null) break;
  }

  console.log(repeating, missing);
};
// T.C -> O(N^2)
// findRepeatingMissing1([3, 1, 2, 5, 4, 6, 7, 5]);

// 2. Better | done by self
const findRepeatingMissing2 = (arr) => {
  let repeating = null;
  let missing = null;

  arr.sort((a, b) => a - b);

  if (arr[0] !== 1) {
    repeating = 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === 0) {
      missing = arr[i];
    } else if (arr[i + 1] - arr[i] === 2) {
      repeating = arr[i] + 1;
    }
  }

  if (repeating === null) {
    repeating = arr[arr.length - 1] + 1;
  }

  console.log(repeating, missing);
};
// T.C -> nLogN + O(N)
// findRepeatingMissing2([3, 1, 2, 5, 3]);
// findRepeatingMissing2([3, 1, 2, 5, 4, 6, 7, 5]);

// 3. Better | Using hashmap
const findRepeatingMissing3 = (arr) => {
  let repeating = -1,
    missing = -1;

  const hash = new Array(arr.length + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]]++;
  }

  for (let i = 1; i <= arr.length; i++) {
    if (hash[i] === 2) repeating = i;
    if (hash[i] === 0) missing = i;

    if (repeating !== -1 && missing !== -1) break;
  }

  console.log(repeating, missing);
};
// T.C -> O(2N)
// S.C -> O(N)
// findRepeatingMissing3([3, 1, 2, 5, 4, 6, 7, 5]);

// 3. Optimal | Using math calculation (revisit)
const findRepeatingMissing4 = (arr) => {
  // S - Sn = x - y
  // S2 - S2N

  const n = arr.length;
  const SN = (n * (n + 1)) / 2;
  const S2N = (n * (n + 1) * (2 * (n + 1))) / 6;

  let S = 0,
    S2 = 0;

  for (let i = 1; i < n; i++) {
    S += arr[i];
    S2 += arr[i] * arr[i];
  }

  let val1 = S - SN; // x-y
  let val2 = S2 - S2N; // x^2-y^2 = (x + y)(x - y)
  val2 = val2 / val1; // Find x+y = (x^2-y^2)/(x-y):

  //Find X and Y: X = ((X+Y)+(X-Y))/2 and Y = X-(X-Y),
  // Here, X-Y = val1 and X+Y = val2:from line 114, 115
  const x = (val1 + val2) / 2;
  const y = x - val1;
  console.log(x, y);
};

findRepeatingMissing4([3, 1, 2, 5, 4, 6, 7, 5]);

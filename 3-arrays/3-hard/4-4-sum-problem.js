/*
4 Sum | Find Quads that add up to a target value

Problem Statement: Given an array of N integers, your task is to find unique quads that add up to 
give a target value. In short, you need to return an array of all the unique quadruplets 
[arr[a], arr[b], arr[c], arr[d]] such that their sum is equal to a given target.

Pre-req: 3-sum problem and 2-sum problem

Note:
0 <= a, b, c, d < n
a, b, c, and d are distinct.
arr[a] + arr[b] + arr[c] + arr[d] == target

Example 1:
Input Format: arr[] = [1,0,-1,0,-2,2], target = 0
Result: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Explanation: We have to find unique quadruplets from the array such that the sum of those elements is 
equal to the target sum given that is 0. The result obtained is such that the sum of the 
quadruplets yields 0.

Example 2:
Input Format: arr[] = [4,3,3,4,4,2,1,2,1,1], target = 9
Result: [[1,1,3,4],[1,2,2,4],[1,2,3,3]]
Explanation: The sum of all the quadruplets is equal to the target i.e. 9.

*/

// 1. Bruteforce | using 3 loops | done by self
const sumProblem1 = (arr, target) => {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        for (let l = k + 1; l < arr.length; l++) {
          if (arr[i] + arr[j] + arr[k] + arr[l] === target) {
            // console.log(arr[i], arr[j], arr[k], arr[l]);
            const temp = [arr[i], arr[j], arr[k], arr[l]];
            temp.sort((a, b) => a - b);
            ans.push(temp);
          }
        }
      }
    }
  }

  const unique = new Set(ans.map(JSON.stringify));
  ans = Array.from(unique).map(JSON.parse);
  console.log(ans);
};

// sumProblem1([1, 0, -1, 0, -2, 2], 0);
// sumProblem1([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9);

// 2. Better | using 3 loops & hashmap
const sumProblem2 = (arr, target) => {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const hashSet = new Set();
      for (let k = j + 1; k < arr.length; k++) {
        const fourth = target - (arr[i] + arr[j] + arr[k]);
        if (hashSet.has(fourth)) {
          const temp = [arr[i], arr[j], arr[k], fourth];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        }
        hashSet.add(arr[k]);
      }
    }
  }

  const unique = new Set(ans.map(JSON.stringify));
  ans = Array.from(unique).map(JSON.parse);
  console.log(ans);
};
// T.C -> O(N^3) * logM
// S.C -> O(2 * no. of quadrupltes) + O(N)

// sumProblem2([1, 0, -1, 0, -2, 2], 0);
// sumProblem2([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9);

// 3. Optimal
const sumProblem3 = (arr, target) => {
  arr.sort((a, b) => a - b);

  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (j != i + 1 && arr[j] === arr[j - 1]) continue;

      let k = j + 1;
      let l = arr.length - 1;

      while (k < l) {
        const sum = arr[i] + arr[j] + arr[k] + arr[l];

        if (sum === target) {
          const temp = [arr[i], arr[j], arr[k], arr[l]];
          ans.push(temp);
          k++;
          l--;
          while (k < l && arr[k] === arr[k - 1]) k++;
          while (k < l && arr[l] === arr[l + 1]) l--;
        } else if (sum < target) k++;
        else l--;
      }
    }
  }
  console.log(ans);
};
// T.C -> O(N^3)
// S.C -> O(no. of quads)
sumProblem3([1, 0, -1, 0, -2, 2], 0);
// sumProblem3([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9);

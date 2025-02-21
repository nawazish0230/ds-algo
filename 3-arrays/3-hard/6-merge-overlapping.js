/*

Merge Overlapping Sub-intervals

Problem Statement: Given an array of intervals, merge all the overlapping intervals and 
return an array of non-overlapping intervals.

Example 1:
Input: intervals=[[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] are overlapping we can merge them to form [1,6] intervals.

Example 2:
Input: [[1,4],[4,5]]
Output: [[1,5]]

Explanation: Since intervals [1,4] and [4,5] are overlapping we can merge them to form [1,5].
*/

// 1. Bruteforce | using sorting and two nested loop comparison
const mergeOverlapping1 = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);

  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let start = arr[i][0];
    let end = arr[i][1];

    // skip all the merged intervals
    if (ans.length && end <= ans[ans.length - 1][1]) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]);
      } else {
        break; //we don't want to check further as it already sorted
      }
    }
    ans.push([start, end]);
  }
  console.log(ans);
};

// T.C -> O(N*logN) + O(2*N)

// mergeOverlapping1([
//   [2, 6],
//   [1, 3],
//   [15, 18],
//   [8, 10],
// ]);

// 1. Bruteforce | using sorting and comparison
const mergeOverlapping2 = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);

  let ans = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    const last = ans[ans.length - 1];
    const curr = arr[i];
    // if the current interval overlaps with the last interval
    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      ans.push(curr); // if the current interval does not overlap with the last interval
    }
  }
  console.log(ans);
};

// T.C -> O(N*logN) + O(2*N)

mergeOverlapping2([
  [1, 3],
  [2, 6],
  [8, 9],
  [9, 11],
  [8, 10],
  [2, 4],
  [15, 18],
  [16, 17],
]);

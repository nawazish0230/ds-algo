/* (Not from this sheet)

Print all permutations of a string / array

Given an array arr of distinct integers, return all the possible  permutations. You can return the answer in any order.

Example 1:
Input: arr = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: arr = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: arr = [1]
Output: [[1]]

*/

/* 
1. Approach - Recursive
- using extra datastructure
REVISIT: need to understand it (https://www.youtube.com/watch?v=YK78FU5Ffjw)
*/
const permutation1 = (arr) => {
  const ans = [];
  const ds = [];
  const freq = new Array(arr.length).fill(0);

  function recurPermute(ds, arr, ans, freq) {
    if (ds.length === arr.length) {
      ans.push([...ds]); // add a copy of current permutation to result
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!freq[i]) {
        ds.push(arr[i]); // Include the current number in the permutation
        freq[i] = 1; // Mark the number as used
        recurPermute(ds, arr, ans, freq); // Recurse for the next number
        freq[i] = 0; // Backtrack: Unmark the number
        ds.pop(); // Remove the current number from the permutation
      }
    }
  }

  recurPermute(ds, arr, ans, freq); // Start the recursion
  console.log(ans);
};

// permutation1([1, 2, 3]);



/* 
2. Approach - Recursive
- using swapping element
REVISIT: need to understand it (https://www.youtube.com/watch?v=f2ic2Rsc9pU&t=32s)
*/

function permutation2(array, start = 0) {
  if (start === array.length - 1) {
    console.log(array.join(",")); // Print the current permutation
    return;
  }

  for (let i = start; i < array.length; i++) {
    // Swap elements at indices `start` and `i`
    [array[start], array[i]] = [array[i], array[start]];

    // Recursively permute the remaining elements
    permutation2(array, start + 1);

    // Backtrack: Undo the swap
    [array[start], array[i]] = [array[i], array[start]];
  }
}

// T.C -> n! * n

permutation2([1, 2, 3]);

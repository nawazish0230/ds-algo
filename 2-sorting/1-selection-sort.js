/*

Topic: Selection Sort Algorithm

Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

Example 2:
Input: N=5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting the array is: 1, 2, 3, 4, 5

*/

/*
Approach: - [13,46,24,52,20,9]
- get the minimum and place it at first and swap value - in first iteration 9 with 13
- need to compare with two number and find smallest one and swap it compared value - in second iteration 13 with 46
- for doing this need to run two nested for loop and compare and swap value
- we are storing min index after comparing which is smaller and then swapping it
- (arr.length - 2) run till here as we want to loop till last element - 1
*/

const selectionSort = (arr) => {
  const n = arr.length
  for (let i = 0; i <= n - 2; i++) {
    let min = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    // let temp = arr[min];
    // arr[min] = arr[i];
    // arr[i] = temp;
    [arr[min], arr[i]] = [arr[i], arr[min]]; //shorthand of above code
  }
  console.log(arr);
};

selectionSort([13, 46, 24, 52, 20, 9]);
// selectionSort([4, 1, 3, 9, 7]);

// T.C => n * (n + 1)/2 => n^2

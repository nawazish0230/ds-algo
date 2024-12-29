/*
Quick Sort Algorithm

Problem Statement:  Given an array of n integers, sort the array using the Quicksort method.

Example 1:
Input:  N = 5  , Arr[] = {4,1,7,9,3}
Output: 1 3 4 7 9 
Explanation: After sorting the array becomes 1, 3, 4, 7, 9

Example 2:
Input: N = 8 , Arr[] = {4,6,2,5,7,9,1,3}
Output: 1 2 3 4 5 6 7 9
Explanation: After sorting the array becomes 1, 3, 4, 7, 9

*/

/*
Approach:- [4, 6, 2, 5, 7, 9, 1, 3]
- It is a *divide and conquers algorithm*
1. Pick a pivot & place it in its correct place in the sorted array | 4 in 3 index
  - 1st element in the array (and place it in correct position so we did with 4)
  - last element in the array
  - median of the array
  - random element of array
2. smaller on the left, larger on the right | 4 would be fixed in 3rd index | [2, 1, 3 ,"4", 6, 5, 7, 9]
3. after 1 step we can say 4 is in correct position
4. pick left side array | [2, 1, 3]
5. Repeat 1, 2 point result is [1, 2, 3 ,"4"]
6. pick right side array | [6, 5, 7, 9] & place random number 6 into correct place where index is 5
7. Repeat 2 points result is [1, 2, 3 ,"4", 5, 6, 7, 9]
*/

const partition = (arr, low, high) => {
  const pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    const pIndex = partition(arr, low, high);
    quickSort(arr, low, pIndex - 1);
    quickSort(arr, pIndex + 1, high);
  }
};

const array = [4, 6, 2, 5, 7, 9, 1, 3];
quickSort(array, 0, array.length - 1);
console.log(array);
